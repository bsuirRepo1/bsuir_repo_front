import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repos from './pages/Repos';
import About from './pages/About';
import ConfirmReg from './pages/ConfirmReg';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() { 
  const [cookies, setCookie] = useCookies(['access_token']);
  const [isAuth, setIsAuth] = useState(false); //!!cookies.access_token
  return (
    <div>
    <ToastContainer 
      autoClose={3000}
      pauseOnHover={false}
    />
    <Router>
      <Header isAuth={isAuth} setIsAuth={setIsAuth}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth setIsAuth={setIsAuth}/>} />
        <Route path="/reg" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/confirm_reg" element={<ConfirmReg />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
