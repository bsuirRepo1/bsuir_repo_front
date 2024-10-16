import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { fetchUserProfile } from '../../services/fetchUserProfile';
import './Profile.css';

function Profile() {
    /*const [cookies] = useCookies(['access_token']); 
    const [userData, setUserData] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
  
    useEffect(() => {
      const getUserData = async () => {
        const token = cookies.access_token;
  
        if (!token) {
          setError('Токен не найден');
          setLoading(false);
          return;
        }
  
        try {
          const data = await fetchUserProfile(token); 
          setUserData(data); 
        } catch (error) {
          setError(error.message); 
        } finally {
          setLoading(false); 
        }
      };
  
      getUserData(); 
    }, [cookies]);
  
    if (loading) {
      return <p>Loading...</p>; 
    }
  
    if (error) {
      return <p>Ошибка: {error}</p>; 
    }*/
  
    return (
      <div>
        {1 ? (
          <div className="profile-page-container">
          <div className="profile-left">
            <img src="/photo.jpg" alt="Profile" className="profile-photo" />
            <div className="profile-info">
              <h2>Имя Фамилия</h2>
              <p>Email: example@gmail.com</p>
              <p>Факультет: ИИТП</p>
            </div>
            <button className="edit-profile-btn">Редактировать профиль</button>
          </div>
    
          <div className="profile-right">
            <div className="info-block">
              <h3>Блок 1</h3>
              <p>Дополнительная информация...</p>
            </div>
            <div className="info-block">
              <h3>Блок 2</h3>
              <p>Еще информация...</p>
            </div>
            <div className="info-block">
              <h3>Блок 3</h3>
              <p>Еще информация...</p>
            </div>
            <div className="info-block">
              <h3>Блок 4</h3>
              <p>Еще информация...</p>
            </div>
            <div className="info-block">
              <h3>Блок 5</h3>
              <p>Еще информация...</p>
            </div>
          </div>
        </div>
        ) : (
          <p>Данные не найдены.</p>
        )}
      </div>
    );
}

export default Profile;