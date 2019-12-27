import React from 'react';
import './header.css';
import Logo from '../../images/logo.png';

function Header() {
  return (
    <div className="header">
    <div className="logo">
     <img src={Logo} alt='logo'></img>
    </div>
      <div className="navbar">
        <ul className="nav">
          <li><a href="/test">Каталог</a></li>
          <li><a href="/test">Новости</a></li>
          <li><a href="/test">О нас</a></li>
          <li><a href="/test">Контакты</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
