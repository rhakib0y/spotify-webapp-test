import React, { Component } from 'react';
import './title-bar.css';
// get our fontawesome imports
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function TitleText(props){
	return (<h3><p>
	 <FontAwesomeIcon icon={faSpotify} size="2x" style={{color:'black'}} /> 
	 <span> &nbsp;</span>
		{props.title}</p></h3>);
}

class TitleBar extends Component {
	

  render() {

    return (
    	<div>
    		<TitleText title={this.props.texttitle}/>
    	</div>
    	);
  }
}

export default TitleBar;
