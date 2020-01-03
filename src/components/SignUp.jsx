import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/rooms');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h1>Зарегистрироваться</h1>
      <NavLink to="/login">Есть аккаунт?</NavLink>
      <form onSubmit={handleSignUp}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default withRouter(SignUp);
