import React, { Component } from 'react';
import AlbumByArtist from '../../content/search-result/album-by-artist';
import TitleBar from '../../fragment/title-bar';
import ArtistDetails from '../../content/search-result/album-by-artist/artist-details';
import AlbumCard from '../../content/search-result/album-by-artist/album-card';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../../content/search-bar/search-bar';



export const GetArtistSearchBar = (props) =>  {
  let artistArr = props.artistObj.items;
  return (
    <div className="App-body-full">
      <Grid container spacing={16} justify="center" direction="row" alignItems="center">
        <Grid item xs={12} sm={3}>  <Typography noWrap />   </Grid>
        <Grid item xs={12} sm={6}  >
         <SearchBar onInvokeSearch={props.onInvokeSearch} searchKeyword = {props.searchKeyword}/>
         </Grid>
        <Grid item xs={12} sm={3} >  <Typography noWrap />   </Grid>
        <Grid item xs={12} sm={12} >  <Typography noWrap />   </Grid>
        { artistArr && artistArr.length < 1? <h3> <span> &nbsp; </span> </h3>
        :artistArr.map(artist => (
          <Grid item xs={12} sm={3} key={artist.id} >
            <AlbumByArtist followers={artist.followers.total}
              artistId = {artist.id} 
              artistname={artist.name}
              imgUrl={artist.images.find(img=>(img))===undefined? false :artist.images.find(img=>(img)).url}
              popularity={artist.popularity} 
              onInvokeEvent = {props.onInvokeEvent}
              />
          </Grid>
        ))}

      </Grid>
    </div>
  );
};

export const GetArtistNameHeading =  (props) => {
  let artistObj = props.artistObj.albumItems;
  let artistArr = artistObj[0]
  let artist = artistArr.artists[0];
  return (
    <div className="name-heading">
      <Grid container spacing={40}>
        <Grid item xs={6} sm={4} >
          <ArtistDetails artistName={artist.name}
            type={artistArr.album_type} /> 
             </Grid>
        <Grid item xs={5} sm={7} >  <Typography noWrap />   </Grid>
        <Grid item xs={1} sm={1} > <ScrollToTop scrollStepInPx="700" delayInMs="300"/>   </Grid>
      </Grid>
    </div>
  );
}

export const GetAlbumCards =  (props) => {
  let albumObj = props.artistObj.albumItems;
  let artistArr = albumObj[0];
  return (
    <div className="App-body-full" >
      <Grid container spacing={16} justify="center" direction="row" alignItems="center">
        {albumObj.map(album => (
          <Grid item xs={12} sm={3} key={album.id} >
            <AlbumCard albumname={album.name}
              artistId = {album.id} 
              artistname={artistArr.artists} date={album.release_date}
              numTracks={album.total_tracks}
              imgUrl={album.images.find(img=>(img)).url} 
              preview={album.external_urls.spotify} ref={props.inputRef}/>
          </Grid>
        ))}
        {/* <Grid item xs={12} zeroMinWidth> <ScrollToTop scrollStepInPx="2000" delayInMs="500"/>   </Grid> */}
      </Grid>
    </div>
  );
}

export const  GetTitleBar =  (props) =>{
  return (
    <div className="App-header">
      <TitleBar texttitle={props.title} />
    </div>
  );
}



class PageUtils extends Component {
  render() {
    return <div>PageUtils</div>;
  }
}

export default PageUtils;
