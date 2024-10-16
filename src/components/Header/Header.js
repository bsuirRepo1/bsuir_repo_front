import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Sidebar";
import ProfileSidebar from "../ProfileSidebar";

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
                <div className='logo'>
                    <p><button onClick={goToAuth}>Войти</button></p>
                    <ProfileSidebar />
                </div>
            </div>
        </header>
    );
}

export default Header;