import React, { useContext, useEffect, useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import firebase from '../firebase';
import Contacts from './Contacts';
import Home from './Home';
import Rooms from './Rooms';
import PrivateRoute from '../PrivateRoute';
import SignUp from './SignUp';
import Login from './Login';
import { AuthContext } from '../Auth';
import ExactRoom from './ExactRoom';
import getRooms from './getRooms';
import { About } from './About';
import { Booked } from './Booked';
function Header() {
  const flats = getRooms();
  useEffect(() => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuLine1 = document.getElementById('mobileMenuLine1');
    const mobileMenuLine2 = document.getElementById('mobileMenuLine2');
    const mobileMenuLine3 = document.getElementById('mobileMenuLine3');
    const hdrNavMobile = document.getElementById('hdrNavMobile');

    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      hdrNavMobile.classList.toggle('hdr__navMobile');
      mobileMenuLine1.classList.toggle('active_line_top');
      mobileMenuLine2.classList.toggle('active_line_center');
      mobileMenuLine3.classList.toggle('active_line_bottom');
    });
  }, []);
  // console.log(flats);
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
    return <Rooms {...props} flats={flats} />;
  };
  const WrappedExatRoom = function(props) {
    return <ExactRoom {...props} flats={flats} />;
  };
  const WrappedBooked = function(props) {
    return <Booked {...props} flats={flats} id={currentUser.uid} />;
  };
  return (
    <>
      <header className="header">
        <nav className="hdr__nav" id="hdrNavMobile">
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
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
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
            {signOut}
          </ul>
        </nav>
        <div className="header__mobile-button" id="mobileMenuBtn">
          <span className="header__mobile-button-line" id="mobileMenuLine1"></span>
          <span className="header__mobile-button-line" id="mobileMenuLine2"></span>
          <span className="header__mobile-button-line" id="mobileMenuLine3"></span>
        </div>
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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
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
