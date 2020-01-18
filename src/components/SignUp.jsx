import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import firebase from '../firebase';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPasswors] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [errorFire, setErrorFire] = useState('');
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      const regEx = email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
      const passwordIsValid = password.value.length >= 6;
      if (regEx && passwordIsValid) {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
          history.push('/rooms');
        } catch (error) {
          setErrorFire(`${error.message}`);
        }
      } else {
        setErrorFire(`Поля не заполненны`);
      }
    },
    [history]
  );
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
    <div className={'wrapper__signUp'}>
      <h1 className={'signUp__name'}>Зарегистрироваться</h1>
      <form onSubmit={handleSignUp} noValidate>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={changeInput}
          required
        />
        {!emailIsValid && <p className="inputsError">example@gmail.com</p>}
        <input
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={changeInput}
          required
        />
        {!passwordIsValid && <p className="inputsError">Слишком короткий пароль</p>}
        <NavLink to="/login" className={'signUp__lin_to_logIn'}>
          Есть аккаунт?
        </NavLink>
        <button type="submit" className={'signUp__btn'}>
          Зарегистрироваться
        </button>
      </form>
      {errorFire && <p className="inputsError">{errorFire}</p>}
    </div>
  );
};
export default withRouter(SignUp);
