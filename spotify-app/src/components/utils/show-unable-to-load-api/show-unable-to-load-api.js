import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import AlertDialog from '../alert-dialog/alert-dialog';


class ShowUnableToLoadApi extends Component {
  
  render() {
    const props = this.props;
    return (
      <div className='errorLoading'>
     <div> <AlertDialog open={true} msg = {props.msg}/> </div> 
        <FontAwesomeIcon icon={faSpinner} spin />
        {'Failed to load API. [' + props.msg + ']'}
      </div>
    );
  }
}

export default ShowUnableToLoadApi;
