import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  snackBar: {
    marginBottom: 10,
  }
};

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Proceed to Checkout"
        />
        <Snackbar
          open={this.state.open}
          // style={styles.snackBar}
          message="Order is being processed"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}