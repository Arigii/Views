// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';

function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><Link className="nav-link" to="/">Главная</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/orders">Заказы</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/clients">Клиенты</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cars">Авто</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/parkings">Парковки</Link></li>
        </ul>
        <ul className="navbar-nav ml-auto"> {/* ml-auto добавлен здесь */}
          {isAuthenticated ? (
            <li className="nav-item">
              <span className="nav-link" onClick={logout}>Выход</span>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">Вход</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
