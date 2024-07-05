// app/routes.jsx

import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute.jsx';
import Home from '../pages/Home.jsx';
import Orders from '../pages/Orders.jsx';
import Cars from '../pages/Cars.jsx';
import Login from '../pages/Login.jsx';
import Parkings from '../pages/Parkings.jsx';
import Clients from '../pages/Clients.jsx';
import React from 'react';

const RoutesComponent = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/parkings" element={<Parkings />} />
            <Route path="/clients" element={<Clients />} />
        </Route>
    </Routes>
);

export default RoutesComponent;
