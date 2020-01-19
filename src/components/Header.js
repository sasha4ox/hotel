import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

function Header({ currentUser, handleSignOut }) {
  const [mobileNenuIsOpen, setMobileNenuIsOpen] = useState(false);
  const [mobileWrapperIsAppear, setMobileWrapperIsAppear] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSizeListener() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSizeListener);
    return () => {
      window.removeEventListener('resize', updateSizeListener);
    };
  }, []);
  const openMobileMenu = () => {
    setMobileNenuIsOpen(!mobileNenuIsOpen);
    setMobileWrapperIsAppear(!mobileWrapperIsAppear);
  };
  const closeMobileNenu = e => {
    if (size <= 800) {
      if (e.currentTarget === e.target || e.target.tagName === 'A') {
        setMobileNenuIsOpen(!mobileNenuIsOpen);
        setTimeout(() => {
          setMobileWrapperIsAppear(!mobileWrapperIsAppear);
        }, 350);
      }
    }
  };
  const signOut = !!currentUser ? (
    <li>
      <button className={'header__signOutbtn'} rel="nofollow" onClick={handleSignOut}>
        Выйти
      </button>
    </li>
  ) : null;
  return (
    <>
      <header className="header">
        <div className="header__logoBlock">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="header__logoBlock__img" />
          </NavLink>
        </div>
        <div
          className={`wrapper__navMob ${mobileWrapperIsAppear ? 'active_wrapperhdrNavMobile' : ''}`}
          onClick={closeMobileNenu}
        >
          <nav
            className={`hdr__nav ${
              mobileNenuIsOpen ? `hdr__navMobile__show hdr__navAnimation` : `hdr__navMobile__hide`
            }`}
          >
            <ul className="hrd__nav__ul">
              <li>
                <NavLink exact to="/">
                  Главная
                </NavLink>
              </li>
              {!!currentUser ? null : (
                <li>
                  <NavLink to="/signUp">Зарегистрироваться/Войти</NavLink>
                </li>
              )}
              {!!currentUser ? (
                <li>
                  <NavLink to="/booked">Забронированные номера</NavLink>
                </li>
              ) : null}

              <li>
                <NavLink to="/rooms" exact>
                  Номера
                </NavLink>
              </li>

              <li>
                <NavLink to="/about">О нас</NavLink>
                <ul>
                  <li>
                    <NavLink to="/contacts">Контакты</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Услуги</NavLink>
                  </li>
                  <li>
                    <NavLink to="/gallery">Галерея</NavLink>
                  </li>
                </ul>
              </li>
              {signOut}
            </ul>
          </nav>
        </div>
        <div className="header__mobile-button" onClick={openMobileMenu}>
          <span className="header__mobile-button-line"></span>
          <span className="header__mobile-button-line"></span>
          <span className="header__mobile-button-line"></span>
        </div>
      </header>
    </>
  );
}
export default Header;
