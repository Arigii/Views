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
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './AuthContext.jsx';

const App = () => (
    <Router>
        <AuthProvider>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path="/orders" element={
                        <PrivateRoute>
                            <Orders />
                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </AuthProvider>
    </Router>
);

createRoot(document.getElementById('app')).render(<App />);
