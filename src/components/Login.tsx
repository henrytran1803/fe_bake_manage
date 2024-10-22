import React, { useState } from 'react';
import { login } from '../services/api';
import { handleError } from '../utils/errors';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      console.log('Login successful:', response);
      // Redirect hoặc xử lý sau khi đăng nhập thành công
    } catch (error) {
      handleError(error);
      setError('Login failed');
    }
  };

  return (
    <div className = "gb-gray-300">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

