import React, { Component } from 'react';

// look and feel
import './App.css';
import "circular-std";

// components)
import ShowUnableToLoadApi from './components/utils/show-unable-to-load-api/show-unable-to-load-api';
import ShowLoadingWait from './components/utils/show-loading-wait/show-loading-wait';
import { GetArtistSearchBar,GetArtistNameHeading,GetAlbumCards,GetTitleBar } from './components/utils/page-utils/page-utils';


//  search data container
const history = require("history").createBrowserHistory();


// for testing only
const keyword = ' ';
const artistId = '6eUKZXaKkcviH0Ku9w2n3V'; //Ed Sheeran
const testAuthToken = "BQCoIFQ09_kOH9isyZqrhl3WTNTVT9ij224v_2nC9p5dugAPHXPwaUDKbj12AWB_PNwFplAKT21viOCRqLjrLh-N7BsbwUe_fxZja30E5UT9OOUTTUbb8hwLnz5NMt_MHA5X3XyhtWywJBObanFsxLCl3xrr5Pq11rCvGAWZpQTjJIJF-pMiAa0R8h_7bb21fz9-KhcHxjI50GeibfiN4OOrFA";


class App extends Component {
  constructor(props) {
    super(props);
    this.hadleSearchKeyword  = this.hadleSearchKeyword.bind(this);
    this.hadleSelectedArtist = this.hadleSelectedArtist.bind(this);
    this.state = {
      isLoaded: false,
      title: "Spotify Artist Search",
      token: testAuthToken,
      artistParams: { q: keyword, type: 'artist' },
      albumParams: { id: artistId },
      isAlbumLoaded: false,
      searchArtistKeyword:keyword,
      selectedArtist:artistId, //Ed Sheeran
      isAuthenticated: false,
        api: {
        response_type: 'code',
        authorization_code: '',	
        grant_type: 'authorization_code',
        token:{
          access_token: '',
          expires_in: 3600,
          refresh_token:''
          }
        },
        webapp:{ 
        redirect_uri: 'http://localhost:3000/app',
        client_secret: '03781f9d3494401998e1ab7fa555804c',
        client_id: '76bae12d453a4cb9a11902ba54359750'
          }
    }
    this.screenFocus = React.createRef()
  }

  componentDidUpdate () {
    //console.log(this.screenFocus);
    // console.log(this.screenFocus.current.offsetTop);
  }

  componentWillMount = () => {
     this.handleTokenFromUrl(this.props.location);
    }
  componentWillReceiveProps(prevProps) {
    if(this.state.isLoaded && prevProps.location.state !== undefined){
      if (prevProps.location.state !== this.state.searchArtistKeyword) {
        const prevValue = prevProps.location.state;
        if(prevValue){
          this.setState({
            searchArtistKeyword : prevValue
          });
          const _url = this.getSearchArtistUrl(prevValue);
        this.loadArtistList(_url, this.state.token);
        }
      }
    } 
  }
  componentDidMount(props) {
    const _token = this.state.api.token.access_token;
    const _url = this.getSearchArtistUrl(this.state.searchArtistKeyword);
    this.loadArtistList(_url, _token);    
  }

  //to obtain token value from URL
  getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    var objString = JSON.stringify(params);
    if(objString.substring(2,3) === '#')
    {params = JSON.parse(objString.replace('#',''))}
    return params;
}


  handleTokenFromUrl(location){
    let tokenObj;
      if(location.hash){ // check if ?tokenObj is  present
        tokenObj =  this.getQueryParams(location.hash)
          // updating state value
           this.setState({
            token: tokenObj.access_token,
            api: {
              token: tokenObj
            }
           }); 
      }
      if(tokenObj)
      {
        window.history.pushState({}, document.title, '/app');
      }
  }

  hadleSearchKeyword(val){
    if(val==='' || val === undefined){
        return;
    }
     this.setState({ 
       searchArtistKeyword: val
        ,artistParams: { q: val }
      });
   const _url = this.getSearchArtistUrl(val);
   this.loadArtistList(_url, this.state.token);

   // saving data search history
    history.push('/app',val);
  }

  hadleSelectedArtist(val){
    if(val===undefined || val ===''){
      return;
    }
    this.setState({ 
      selectedArtist: val
      ,albumParams: {id: val}
    });
    const _url2 = this.getOpenAlbumByArtistUrl(val);
    this.loadArtistDetails(_url2,  this.state.api.token.access_token);
    setTimeout(() => {
      this.scrollToMyRef()
    }, 500)
    
  }

  // scrollToMyRef = () => window.scrollTo(0, this.screenFocus.current.offsetTop)
  scrollToMyRef = () => window.scrollTo(0, this.screenFocus.offsetTop);
  
  getSearchArtistUrl(q) {
    let params = this.state.artistParams;
   q = q ===undefined ? this.state.searchArtistKeyword : q;
   const type = params.type=== undefined ? 'artist' : params.type;
    return 'https://api.spotify.com/v1/search?q=' + q + '&type=' + type;
  }

  getOpenAlbumByArtistUrl = (id) => 'https://api.spotify.com/v1/artists/' + id + '/albums';
  


  /* api call*/ 
  loadArtistList(_url, _token) {
    fetch(_url, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer ' + _token,
        'Content-Type': 'application/json; charset=utf-8'
      })
    })
    .then(res => res.json())
      .then(
        (result) => {
          try {
            if (result.error) {
              this.setState({
                isLoaded: true,
                error: result.error,
                errorMsg: result.error.status +' - '+result.error.message
              });
            } else {
              this.setState({
                isLoaded: true,
                items: result.artists.items
              });
              
            }
          } catch (e) { console.log(e); }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
            errorMsg: error.status +' - '+error.message
          });
        }
      )
  }

  /* api call */
  loadArtistDetails(_url, _token) {
    fetch(_url, {
      method: 'get',
      headers: new Headers({
        'Authorization': 'Bearer ' + _token,
        'Content-Type': 'application/json; charset=utf-8'
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          try {
            if (result.error) {
              this.setState({
                isAlbumLoaded: true,
                error: result.error,
                errorMsg: result.error.status +' - '+result.error.message
              });
            } else {
              this.setState({
                isAlbumLoaded: true,
                albumItems: result.items
              });
            }
          } catch (e) { console.log(e); }
        },
        (error) => {
          this.setState({
            isAlbumLoaded: true,
            error: error,
            errorMsg: error.status +' - '+error.message
          });
        }
      )
  }

  render() {
    const data = this.state;
    return (
      <div className="App">
        <GetTitleBar title="Spotify Artist Search"/>
        {data.isLoaded ? (
          data.error ?
            <ShowUnableToLoadApi msg={data.errorMsg} />
             : <GetArtistSearchBar artistObj={data}
              onInvokeSearch={this.hadleSearchKeyword} 
              onInvokeEvent={this.hadleSelectedArtist}
              searchKeyword = {this.state.searchArtistKeyword}/>
        ) : (<ShowLoadingWait />)}

           
          {data.items && data.albumItems ?
           (data.items.length > 0 && data.albumItems.length > 0 ?
           (  <GetTitleBar title="Spotify Artist Albums"/> ) : <div> &nbsp; </div> 
           ): <div> &nbsp; </div> }
           
          { data.isAlbumLoaded && data.albumItems  && data.items&& data.items && data.items.length > 0 ?
            <div ref={ (ref) => this.screenFocus=ref } > </div> 
            : <div ref={ (ref) => this.screenFocus=ref } > </div> 
          }

            

          {data.isAlbumLoaded && data.albumItems  && data.items&& data.items && data.items.length > 0  ? (
            data.error ?
            ( <ShowUnableToLoadApi msg={data.errorMsg} /> )
                : (<GetArtistNameHeading artistObj={data} />)
          ) : (<div> &nbsp; </div>)}
          {data.isAlbumLoaded  && data.albumItems && data.items && data.items.length > 0  ? (
            data.error ? <ShowUnableToLoadApi msg={data.errorMsg} />
              : <GetAlbumCards artistObj={data}  />
          ) : (<div> &nbsp; </div>)}
          
      </div>
    );
   
  }

}

export default App;
