import React from "react";
import './Header.css';
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Sidebar";

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
                    <Sidebar />
                    <h1><button onClick={goToHome}>BsuirRepo</button></h1>
                </div>
                <nav className="menu">
                    <ul>
                        <li><button onClick={goToHome}>Главная</button></li>
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