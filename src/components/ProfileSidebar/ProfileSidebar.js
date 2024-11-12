import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { logout } from '../../services/logout';
import './ProfileSidebar.css'
import { ToastContainer, toast } from 'react-toastify';

const ProfileSidebar = ({ setIsAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const goToAbout = () => {
    toggleSidebar();
    navigate('/about');
  }

  const goToProfile = () => {
    toggleSidebar();
    navigate('/profile');
  }
  const goToRepos = () => {
    toggleSidebar();
    navigate('/repos');
  }

  const goToLogout = async () => {
    toggleSidebar();
    try {
      const data = await logout();
      console.log('Пользователь вышел:', data);
      setIsAuth(false);
      navigate('/');
    } catch (error) {
      toast.error(`Ошибка: ${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: 'Flip',
      });
    }
  }

  return (
    <div>
      <BsFillPersonFill onClick={toggleSidebar} className="toggle-butt"/>
      <div className={`p-sidebar ${isOpen ? 'open' : ''}`}>
        <IoClose onClick={toggleSidebar} className="close-butt"/>
        <ul>
          <li><button onClick={goToProfile}><IoPersonCircleOutline className='icon'/>Мой профиль</button></li>
          <li><button onClick={goToRepos}><IoAlbumsOutline className="icon"/>Мои репозитории</button></li>
          <li><button ><IoBuildOutline className="icon"/>Настройки</button></li>
          <li><button onClick={goToLogout}><IoExitOutline className="icon"/>Выйти</button></li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}

export default ProfileSidebar;