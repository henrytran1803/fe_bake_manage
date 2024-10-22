// pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';
const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToLogin}>Go to Login Page</button>
      <CategoryList/>
    </div>
  );
};

export default HomePage;
