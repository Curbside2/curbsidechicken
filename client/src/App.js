import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from './components/GridList'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <MuiThemeProvider>
            <GridList />
          </MuiThemeProvider>
        </div>
    );
  }
}

export default App;
