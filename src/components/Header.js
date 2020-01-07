import React, { useContext } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
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
import getRooms from './getRooms';
import { Booked } from './Booked';
function Header() {
  const flats = getRooms();
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
  const WrappedRooms = function(props) {
    // Конструкция "{...props}" нужна, чтобы не потерять
    // параметры, переданные от компонента Route
    return <Rooms {...props} flats={flats} />;
  };
  const WrappedExatRoom = function(props) {
    // Конструкция "{...props}" нужна, чтобы не потерять
    // параметры, переданные от компонента Route
    return <ExactRoom {...props} flats={flats} />;
  };
  const WrappedBooked = function(props) {
    return <Booked {...props} flats={flats} id={currentUser.uid} />;
  };
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
        <PrivateRoute path={`/rooms/:id`} component={WrappedExatRoom} />
        <PrivateRoute path={`/booked`} component={WrappedBooked} />
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        {/* <Route path="/rooms/one">
          <OneRoom />
        </Route>
        <Route path="/rooms/two">
          <TwoRooms />
        </Route>
        <Route path="/rooms/three">
          <ThreeRooms />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route exact path="/rooms" component={WrappedRooms}></Route>
      </Switch>
    </>
  );
}
export default Header;
