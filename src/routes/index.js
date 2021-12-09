import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<AuthPage />} />
    </Routes>
  );
};

export default AppRoutes;
