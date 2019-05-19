import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import YoutubeSearchedFor from '@material-ui/icons/YoutubeSearchedFor';

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    console.log(window.pageYOffset);
    // window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    window.scroll(0, 0);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
          <IconButton color="inherit" title="Back to Searh Artist"
           size ="large" component="button" onClick={ () => { this.scrollToTop(); }}>
                    <YoutubeSearchedFor /> 
                  </IconButton>
      );
   }
} 

export default ScrollToTop;
