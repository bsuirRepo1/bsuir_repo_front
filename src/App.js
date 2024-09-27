import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repos from './pages/Repos';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Register/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
