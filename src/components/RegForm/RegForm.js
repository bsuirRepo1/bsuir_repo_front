import './RegForm.css';
import React, { useState } from 'react';
import { registerUser } from '../../services/reg.js';
import { useNavigate } from 'react-router-dom';

function RegForm(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        password_confirm: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setPasswordMismatch(false);

        if (formData.password !== formData.password_confirm) {
            setPasswordMismatch(true);
            setIsLoading(false);
            return;
        }

        try {
            const data = await registerUser(formData);
            console.log('Пользователь зарегистрирован:', data);
            setSuccess(true);
            navigate('/confirm_reg');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="form-container">
            <h1>Регистрация</h1>
            <div className='reg-form'>
            <form onSubmit={handleSubmit}>
                <div className="image-container"></div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Никнейм"
                        value={formData.username}
                        onChange={handleChange}
                        minLength="4"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        minLength="8"
                        required
                    />
                    <input
                        type="password"
                        name="password_confirm"
                        placeholder="Повтор пароля"
                        value={formData.password_confirm}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Загрузка...' : 'Регистрация'}
                    </button>
                
                    <text> Уже зарегистрирован? <a id="underlined-text" href="/auth">Войти</a></text>
                
                    <text className="errors-container">
                        {error && <p className = "errors">{error}</p>}
                        {passwordMismatch && <p className = "Error">Пароли должны совпадать</p>}
                    </text>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RegForm;