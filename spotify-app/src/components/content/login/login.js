import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './login.css'
import { withStyles } from '@material-ui/core/styles';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const StyledPaper = withStyles({
  root: {
    background: 'white',
    borderRadius: 3,
    border: 50,
    color: 'Black',
    height: 50,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(130, 130, 130)',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    paddingBottom: 15
  }
})(Paper);

const SCOPE_ARRAY = [
    //Listening History 
  'user-read-recently-played','user-top-read'
    //Library 
  ,'user-library-modify','user-library-read'
    //Playlists 
  ,'playlist-read-private','playlist-modify-public','playlist-modify-private','playlist-read-collaborative'
    //Users 
  ,'user-read-email','user-read-birthdate','user-read-private'
    //Spotify Connect 
  ,'user-read-playback-state','user-modify-playback-state','user-read-currently-playing'
    //Playback 
  ,'app-remote-control','streaming'
  //Follow
  ,'user-follow-read','user-follow-modify'
]

class Login extends Component {
   constructor(props){
     super(props);
     this.handleLogin = this.handleLogin.bind(this);
     this.state = {
        isAuthenticated: false,
        api: {
        response_type: 'token',//'code',
        authCode: '',	
        grant_type: 'authorization_code',
        token: '',
        refresh_token: ''
        },
        webapp:{ 
        redirect_uri: 'http://localhost:3000/app',
        client_secret: '03781f9d3494401998e1ab7fa555804c',
        client_id: '76bae12d453a4cb9a11902ba54359750',
        scope: SCOPE_ARRAY
          }
     }
   }

  getAuthCodeUrl(){
    const scopes = this.state.webapp.scope.join(' ');
    // console.log(this.state);
    return "https://accounts.spotify.com/authorize?response_type="+this.state.api.response_type
    +"&client_id="+this.state.webapp.client_id
    +(scopes ? '&scope=' + encodeURIComponent(scopes) : 'user-read-private') 
    +"&redirect_uri="+encodeURIComponent(this.state.webapp.redirect_uri);
  }

  handleLogin(event){
    console.log(this.props);
    const URL =this.getAuthCodeUrl();
    window.open(URL,'_self');
  }

  render() {
    // onClick={this.handleLogin}
    return (
      <div className='centerpage'>
      <span> &nbsp; </span> 
      <StyledPaper>
        <h2> Login </h2>
         <span>&nbsp;</span>
         <div style={{align:'left'}}>
            <FontAwesomeIcon  icon={faSpotify} 
            size="3x" className='iconButton'
            onClick={this.handleLogin}
            />
          </div>
        </StyledPaper>
        <span> &nbsp; </span> 
        </div>
    );
  }
}

export default Login;
