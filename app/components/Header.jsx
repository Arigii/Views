// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container">
        <span className="navbar-brand">парковОчка</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><Link className="nav-link" to="/">Главная</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/orders">Заказы</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/clients">Клиенты</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cars">Авто</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/parkings">Парковки</Link></li>
          </ul>
          <div className="d-flex align-items-center ml-auto"> {/* ml-auto для выравнивания вправо */}
            {isAuthenticated ? (
              <div className="nav-item d-flex align-items-center">
                <span className="nav-link">{user?.login}</span>
                <button className="btn btn-outline-danger ml-2" onClick={logout}>Выход</button>
              </div>
            ) : (
              <div className="nav-item">
                <Link className="btn btn-primary" to="/login">Вход</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
