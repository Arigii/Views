// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><a className="nav-link" href="/">Главная</a></li>
          <li className="nav-item"><a className="nav-link" href="/orders">Заказы</a></li>
          <li className="nav-item"><a className="nav-link" href="/clients">Клиенты</a></li>
          <li className="nav-item"><a className="nav-link" href="/cars">Авто</a></li>
          <li className="nav-item"><a className="nav-link" href="/parkings">Парковки</a></li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><span className="nav-link">Логин</span></li>
          <li className="nav-item"><a className="nav-link" href="/login">Вход</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
