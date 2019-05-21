import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  root: {
    // padding: '2px 4px 10x 20x',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    height:80,
    textAlign: 'center'
  },
  input: {
    marginLeft: 20,
    flex: 1,
    textAlign: 'center'
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class SearchBar extends Component {
	constructor(props){
		super(props);
    this.handleClick = this.handleClick.bind(this);
    this.inputValue = React.createRef();
    this.keyPress = this.keyPress.bind(this);
	}
  
 
  handleClick(event){
      this.props.onInvokeSearch(this.inputValue.current.value);
  }
   keyPress(e){
      if(e.keyCode === 13){
        this.props.onInvokeSearch(this.inputValue.current.value);
      }
    }
  	render(){
       const { classes } = this.props;
      //  onChange={this.handleClick}
		  return (
			    <Paper className={classes.root}>
            <InputBase className={classes.input} 
              placeholder="Search for an artist"
              inputRef={this.inputValue} inputComponent='input'
              onKeyDown={this.keyPress} 
              onChange={this.handleClick}
              />
			      <IconButton className={classes.iconButton} aria-label="Search"  onClick={this.handleClick}>
			        <SearchIcon />
			      </IconButton>
			    </Paper>
		  );
		}
}



SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);


