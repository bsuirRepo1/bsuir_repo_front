import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import './ProfileSidebar.css'

const ProfileSidebar = () => {
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

  return (
    <div>
      <BsFillPersonFill onClick={toggleSidebar} className="toggle-butt"/>
      <div className={`p-sidebar ${isOpen ? 'open' : ''}`}>
        <IoClose onClick={toggleSidebar} className="close-butt"/>
        <ul>
          <li><button onClick={goToProfile}>Мой профиль</button></li>
          <li><button onClick={goToRepos}>Мои репозитории</button></li>
          <li><button >Настройки</button></li>
          <li><button >Выйти</button></li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;