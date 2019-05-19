import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    maxWidth: '85%',
    height: '100%',
  },
  media: {
    width : '100%'
  }
});

function AlbumCard(props) {
  const { classes } = props;
  // let tempImgSrc = "https://i.scdn.co/image/b02690491d5cf0f477e55f70c717ff616c093530";
 const tempImgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH35KU4BKmriQ9LkHZbYK5UETdZxvPMhL9lo9sXxUjiCXHGwDvcg";
  
  return (
    <Card className={classes.card}>
        <CardMedia
          component = 'img'
          className={classes.media}
          // src="https://pmdvod.nationalgeographic.com/NG_Video_DEV/976/327/ngm-reptiles-msm_480x360.jpg"
          src={props.imgUrl ? props.imgUrl  : tempImgSrc}
          title="Album"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
				{props.albumname}
          </Typography>
           <Typography variant="caption"  align="left">
         	 	{props.artistname===undefined ? '': props.artistname.map(name=> (name.name))}
        	</Typography>
        	<br />
        	<Typography variant="caption" gutterBottom align="left">
         	 	{props.date}
        	</Typography>
        	<Typography variant="caption" gutterBottom align="left">
         	 	{props.numTracks} tracks
        	</Typography>
        </CardContent>
           <Button size="medium" href={props.preview} target='_blank' color="inherit" fullWidth={true} variant='outlined'>
          		Preview on Spotify
        	</Button>
    </Card>
  );
}

AlbumCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumCard);
