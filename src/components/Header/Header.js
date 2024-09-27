import React from "react";
import './Header.css';
import { BsFillPersonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    const goToAbout = () => {
        navigate('/about');
    };
    
    const goToAuth = () => {
        navigate('/auth');
    }

    const goToProfile = () => {
        navigate('/profile');
    }

    const goToRepos = () => {
        navigate('/repos');
    }
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <FiMenu className="menu_button"/>
                    <h1><button onClick={goToHome}>BsuirRepo</button></h1>
                </div>
                <nav className="menu">
                    <ul>
                        <li><button onClick={goToRepos}>Репозитории</button></li>
                        <li><button onClick={goToAbout}>Контакты</button></li>
                        <li><button onClick={goToAuth}>Войти</button></li>
                    </ul>
                    <div className="profile_button">
                        <button onClick={goToProfile}><BsFillPersonFill/></button>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;