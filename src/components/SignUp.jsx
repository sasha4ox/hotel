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
    <div className={'wrapper__signUp'}>
      <h1 className={'signUp__name'}>Зарегистрироваться</h1>
      <form onSubmit={handleSignUp}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <NavLink to="/login" className={'signUp__lin_to_logIn'}>
          Есть аккаунт?
        </NavLink>
        <button type="submit" className={'signUp__btn'}>
          Войти
        </button>
      </form>
    </div>
  );
};
export default withRouter(SignUp);
