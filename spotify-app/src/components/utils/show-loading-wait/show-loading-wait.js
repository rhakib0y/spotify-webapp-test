import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class ShowLoadingWait extends Component {
  render() {
    return (
     <FontAwesomeIcon size='2x' icon={faSpinner} spin />
    );
  }
}

export default ShowLoadingWait;
