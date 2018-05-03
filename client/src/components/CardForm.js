import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

const CardForm = () => (
  <Paper zDepth={2}>
    <TextField hintText="Name" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Card Number" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="CVV/CVC" style={style} underlineShow={false} />
    <Divider />
    <TextField hintText="Address" style={style} underlineShow={false} />
    <Divider />
  </Paper>
);

export default CardForm;