import React, { useContext } from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import firebase from '../firebase';
import Contacts from './Contacts';
import Home from './Home';
import Rooms from './Rooms';
import OneRoom from './OneRoom';
import TwoRooms from './TwoRooms';
import ThreeRooms from './ThreeRooms';
import PrivateRoute from '../PrivateRoute';
import SignUp from './SignUp';
import Login from './Login';
import { AuthContext } from '../Auth';
import ExactRoom from './ExactRoom';
function Header() {
  let match = useRouteMatch();
  const { currentUser } = useContext(AuthContext);
  const handleSignOut = e => {
    e.preventDefault();
    firebase.auth().signOut();
  };
  const signOut = !!currentUser ? (
    <li>
      <button rel="nofollow" onClick={handleSignOut}>
        Выйти
      </button>
    </li>
  ) : null;

  return (
    <>
      <header className="header">
        <nav className="hdr__nav">
          <ul className="hrd__nav__ul">
            <li>
              <NavLink exact to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/signUp">Зарегистрироваться/Войти</NavLink>
            </li>
            <li>
              <NavLink to="/rooms" exact>
                Номера
              </NavLink>
              <ul>
                <li>
                  <NavLink to="/rooms/one">Одноместные</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms/two">Двухместные</NavLink>
                </li>
                <li>
                  <NavLink to="/rooms/three">Трёхместные</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            {signOut}
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path={`/rooms/:id`} component={ExactRoom} />
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/rooms/one">
          <OneRoom />
        </Route>
        <Route path="/rooms/two">
          <TwoRooms />
        </Route>
        <Route path="/rooms/three">
          <ThreeRooms />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute exact path="/rooms" component={Rooms}></PrivateRoute>
      </Switch>
    </>
  );
}
export default Header;
