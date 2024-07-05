// app/app.jsx

import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './AuthContext.jsx';
import RoutesComponent from './routes/routes.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
    <Router>
        <AuthProvider>
            <div>
                <Header />
                <RoutesComponent />
            </div>
        </AuthProvider>
    </Router>
);

createRoot(document.getElementById('app')).render(<App />);
