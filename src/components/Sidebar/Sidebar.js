import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const goToAbout = () => {
    toggleSidebar();
    navigate('/about');
  }

  return (
    <div>
      <FiMenu onClick={toggleSidebar} className="toggle-btn"/>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <IoClose onClick={toggleSidebar} className="close"/>
        <img src="/Logo.png" className="picture"/>
        <ul>
          <li><button onClick={goToAbout}><IoAlbumsOutline className="icon"/>Репозитории</button></li>
          <li><button onClick={goToAbout}><IoStatsChartOutline className="icon"/>Рейтинг</button></li>
          <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab"><IoAirplaneOutline className="icon"/>Рикрол</a></li>
          <li><button onClick={goToAbout}><IoCallOutline className="icon"/>Контакты</button></li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
