// pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToLogin}>Go to Login Page</button>
    </div>
  );
};

export default HomePage;
