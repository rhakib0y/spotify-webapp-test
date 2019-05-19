import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';


class ArtistDetails extends Component {

  render() {
    return ( 
    	<div className="artist-heading">
    		<Typography variant="h3" component="h3" align="left">
         	 	{this.props.artistName} 
        	</Typography>
        	<Typography variant="subheading" gutterBottom align="left">
         	  {this.props.type.toUpperCase()} 
        	</Typography>
    	</div> 
    	);
  }
}

export default ArtistDetails;
