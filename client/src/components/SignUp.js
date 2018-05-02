import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from '../firebase'
import * as routes from '../constants/routes';
import "./signin.css"; 

const SignUpPage = () =>
  <div className="signin-div">
    <h2 className="signup-heading">Sign Up for Curbside Chicken!</h2>
    <p className="signup-form"> </p>
    <SignUpForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
     this.state = { ...this.INITIAL_STATE };
  }

  onSubmit = (event) => {

    const INITIAL_STATE = {
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };  
    const {
      email,
      passwordOne,
      // passwordTwo,
      // error,
    } = this.state;

    // const isInvalid =
    //   passwordOne !== passwordTwo ||
    //   passwordOne === '' ||
    //   email === '';

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    // event.preventDefault();
  };

  render() {
    return (
    <p className="signup-form">
      <form onSubmit={this.onSubmit}>
        <input
          value={this.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={this.passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit">
          Sign Up
        </button>

        { this.error && <p>{this.error.message}</p> }

      </form>
      </p>
    );
  }
}

const SignUpLink = () =>
  <p style={{ textAlign: 'center'}}>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default SignUpPage;

export {
  SignUpForm,
  SignUpLink,
};