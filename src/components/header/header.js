import React from 'react';
import './header.css';
import Logo from '../../images/logo.png';

function Header() {
  return (
    <div className="header">
    <div className="logo">
     <img src={Logo} alt='logo' href='/home'></img>
    </div>
      <div className="navbar">
        <ul className="nav">
          <li><a href="/catalog">Каталог</a></li>
          <li><a href="/news">Новости</a></li>
          <li><a href="/about">О нас</a></li>
          <li><a href="/contacts">Контакты</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
