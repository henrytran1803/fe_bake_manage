import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';


import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
};

export default App;
