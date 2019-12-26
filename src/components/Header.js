import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import Rooms from './Rooms';
function Header() {
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
              <NavLink to="/rooms">Номера</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/contacts">
          <Contacts />
        </Route>

        <Route path="/rooms">
          <Rooms />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
export default Header;
