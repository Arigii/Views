import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx'; // Adjust the path accordingly

const Logins = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7112/api/StaffBusiness/login', {
                Login: username,
                Password: password
            });
            console.log('Login successful:', response.data);

            localStorage.setItem('user', JSON.stringify(response.data));

            login();
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Неверный логин или пароль');
        }
    };

    return (
        <div className="container">
            <h3 className="text-center mb-4">Вход сотрудника</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Логин</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-primary btn-custom btn-block">Войти</button>
            </form>
        </div>
    );
};

export default Logins;
