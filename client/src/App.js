import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
// import Navigation from './components/Navigation';
// import { auth } from './firebase/firebase.js';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import Profile from './pages/Profile'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/*<Route exact path="/" component={Landing} />*/}
            <Route exact path="/" component={SignInPage} />
            <Route path='/profile' component={Profile} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
