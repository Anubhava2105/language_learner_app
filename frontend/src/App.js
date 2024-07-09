import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar.js';
import LoginPage from './components/LoginPage.js';
import LandingPage from './components/LandingPage.js';
import QuizzesPage from './components/QuizzesPage.js';
import AboutUsPage from './components/AboutUsPage.js';
import SignUpPage from './components/SignUpPage.js';
import AdminHome from "./Admin/Home.jsx";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/user" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/admin' element={< AdminHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
