import React, { useCallback, useContext, useState } from 'react';
import firebase from '../firebase';
import { withRouter, Redirect } from 'react-router';
import { AuthContext } from '../Auth';
const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPasswors] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [errorFire, setErrorFire] = useState('');
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/rooms');
      } catch (error) {
        setErrorFire(`${error.message}`);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/rooms" />;
  }
  const changeInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === 'email') {
      const regEx = value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
      setEmail(value);
      if (!regEx) {
        setEmailIsValid(false);
      } else {
        setEmailIsValid(true);
      }
    } else if (name === 'password') {
      const passIsValid = value.length >= 6;
      setPasswors(value);
      if (!passIsValid) {
        setPasswordIsValid(false);
      } else {
        setPasswordIsValid(true);
      }
    }
  };
  return (
    <div className={'wrapper__logIn'}>
      <h1 className={'login__name'}>Войти</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={changeInput}
        />
        {!emailIsValid && <p className="inputsError">example@gmail.com</p>}
        <input
          type="password"
          name="password"
          placeholder="qwerty"
          onChange={changeInput}
          value={password}
        />
        {!passwordIsValid && <p className="inputsError">Слишком короткий пароль</p>}
        <button type="submit" className={'logIn__btn'}>
          Войти
        </button>
      </form>
      {errorFire && <p className="inputsError">{errorFire}</p>}
    </div>
  );
};
export default withRouter(Login);
