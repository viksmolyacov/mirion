import React from 'react';
import './header.css';
import Logo from '../../images/logo.png';

function Header() {
  return (
    <div className="header">
    <div className="logo">
     <img src={Logo}></img>
    </div>
      <div className="navbar">
        <ul className="nav">
          <li><a href="#">Каталог</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
