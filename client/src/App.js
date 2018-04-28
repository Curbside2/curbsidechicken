import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/*<Route exact path="/" component={Landing} />*/}
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
