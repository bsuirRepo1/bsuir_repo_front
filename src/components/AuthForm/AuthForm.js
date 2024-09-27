import './AuthForm.css';
import React, { useState } from 'react';
import { loginUser } from '../../services/auth.js';

function AuthForm(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const data = await loginUser(formData);
            console.log('Пользователь вошел:', data);
            setSuccess(true);
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
            <h1>Авторизация</h1>
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
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        minLength="8"
                        required
                    />

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Загрузка...' : 'Регистрация'}
                    </button>
                
                    <text> <a>Нет аккаунта?</a> <a id="underlined-text" href="/reg">Зарегистрируйтесь</a></text>
                
                    <text id = "Errors">
                        {error && <p className="Error">{error}</p>}
                    </text>
                </div>
            </form>
        </div>
    )
}

export default AuthForm;