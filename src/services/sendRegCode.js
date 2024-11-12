export const sendRegCode = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/confirm-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Ошибка при отправке кода');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка:', error);
      throw error;
    }
};