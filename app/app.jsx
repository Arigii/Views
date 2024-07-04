// src/app.jsx

import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Orders from './pages/Orders.jsx';
import Cars from './pages/Cars.jsx';
import Login from './pages/Login.jsx';
import Parkings from './pages/Parkings.jsx';
import Clients from './pages/Clients.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/login" element={<Login />} />
                <Route path="/parkings" element={<Parkings />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>
        </div>
    </Router>
);

createRoot(document.getElementById('app')).render(<App />);
