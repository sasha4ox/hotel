import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

function Header({ currentUser, handleSignOut }) {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function updateSizeListener() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSizeListener);
    function toggleMobileMenu() {
      hdrNavMobile.classList.toggle('hdr__navMobile');
      setTimeout(() => {
        hdrNavMobile.classList.toggle('hdr__navAnimation');
      }, 0);
      mobileMenuLine1.classList.toggle('active_line_top');
      mobileMenuLine2.classList.toggle('active_line_center');
      mobileMenuLine3.classList.toggle('active_line_bottom');
      wrapperhdrNavMobile.classList.toggle('active_wrapperhdrNavMobile');
    }
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuLine1 = document.getElementById('mobileMenuLine1');
    const mobileMenuLine2 = document.getElementById('mobileMenuLine2');
    const mobileMenuLine3 = document.getElementById('mobileMenuLine3');
    const wrapperhdrNavMobile = document.getElementById('wrapperhdrNavMobile');
    const hdrNavMobile = document.getElementById('hdrNavMobile');
    function toggleMobileMenuListener(e) {
      if (e.target.tagName === 'A' || e.target.classList.contains('active_wrapperhdrNavMobile')) {
        toggleMobileMenu();
      }
    }
    if (size <= 800) {
      console.log('Less');
      wrapperhdrNavMobile.classList.add('Desctop');
      if (wrapperhdrNavMobile.classList.contains('Desctop')) {
        wrapperhdrNavMobile.classList.remove('Desctop');
        wrapperhdrNavMobile.classList.add('Mobile');
        wrapperhdrNavMobile.addEventListener('click', toggleMobileMenuListener);
        mobileMenuBtn.addEventListener('click', function(e) {
          e.preventDefault();
          toggleMobileMenu();
        });
      }
    } else if (size > 800) {
      console.log('More');
      wrapperhdrNavMobile.classList.add('Mobile');
      if (wrapperhdrNavMobile.classList.contains('Mobile')) {
        wrapperhdrNavMobile.classList.remove('Mobile');
        wrapperhdrNavMobile.classList.add('Desctop');
        wrapperhdrNavMobile.removeEventListener('click', toggleMobileMenuListener);
      }
    }
  }, [size]);

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
        <div className="wrapper__navMob" id="wrapperhdrNavMobile">
          <nav className="hdr__nav" id="hdrNavMobile">
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
        <div className="header__mobile-button" id="mobileMenuBtn">
          <span className="header__mobile-button-line" id="mobileMenuLine1"></span>
          <span className="header__mobile-button-line" id="mobileMenuLine2"></span>
          <span className="header__mobile-button-line" id="mobileMenuLine3"></span>
        </div>
      </header>
    </>
  );
}
export default Header;
