import React, { useCallback, useContext } from 'react';
import firebase from '../firebase';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../Auth';
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/rooms');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/rooms" />;
  }
  return (
    <div>
      <h1>Войти</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
export default withRouter(Login);
