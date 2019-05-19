import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends Component {
  constructor(props){
    super(props);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
    };
  }
  

  handleClickOpen = () =>this.setState({ open: true })
  

  handleClose = () => {
    this.setState({ open: false });
    document.location.replace('http://localhost:3000/login');
    // return <Redirect to='/login' />;
  }


  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error Occured"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" style={{color:'red', width:'400px'}}>
              {this.props.msg}
            </DialogContentText>
           { /* <sub> "*Please note that you are only using Spotify Authencation: 'Implicit Grant'" </sub> */ }
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Reload Credential
            </Button>
           
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
