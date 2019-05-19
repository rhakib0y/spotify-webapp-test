import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarRatingComponent from 'react-star-rating-component';


const styles = theme => ({
  card: {
    maxWidth: '85%',
    height: '100%',
  },
  media: {
    height: '20em',
    width : '20em'
  }
});



class AlbumByArtist extends Component {
	constructor(props){
		super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const selected = this.props.artistId ; 
    if(selected !== undefined && selected !==''){
      this.props.onInvokeEvent(selected);
    }
}
  
    
  render() {
    const { classes } = this.props;
    const props = this.props;
    const _rating = props.popularity / 20;
    let rating = Math.round(_rating.toFixed(1));
     // let tempImgSrc = "https://i.scdn.co/image/b02690491d5cf0f477e55f70c717ff616c093530";
 const tempImgSrc = "data:image/png;base64,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";
  

    return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
        component = 'img'
          className={classes.media}
            src={props.imgUrl ? props.imgUrl  : tempImgSrc}
          title= 'Artist'
          onClick={this.handleClick}
        />
        <CardContent>
          <Typography gutterBottom variant="h5"  align="left">
				    {props.artistname}
          </Typography>
           <Typography variant="caption" gutterBottom align="left">
         	 	{props.followers.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} followers
        	</Typography>
        </CardContent>
         <CardActions>
           <StarRatingComponent 
            name="rate1" 
            starCount={rating}
            value={_rating}
             renderStarIcon={() => <GradeIcon />}
             renderStarIconHalf={() => <StarHalfIcon />}
            />
         </CardActions>
      
      </CardActionArea>
    </Card>
  );
    }
}

AlbumByArtist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumByArtist);
