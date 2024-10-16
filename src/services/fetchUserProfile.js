export const fetchUserProfile = async (token) => {
    const url = 'http://127.0.0.1:8000/api/users/profile/'; 
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении профиля:', error);
      throw error; 
    }
  };
  