// pages/LoginPage.tsx
import React from 'react';
import {Login} from '../components/Login';
import CategoryList from '../components/CategoryList';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Login />
      <CategoryList/>

    </div>
  );
};

export default LoginPage;
