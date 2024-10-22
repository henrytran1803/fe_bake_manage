// components/Login/index.tsx
import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { LoginProps } from './types';

const Login = ({ onSubmit }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF9F4]">
      {/* Background Design */}
      <div className="fixed left-0 bottom-0 justify-center ">
        <div className="absolute left-[-250px] bottom-[-250px] w-[500px] h-[500px] rounded-full bg-[#F2CBCB] "></div>
        <div className="absolute left-[-200px] bottom-[-200px] w-[400px] h-[400px] rounded-full bg-[#F5E0E0] "></div>
        <div className="absolute left-[-150px] bottom-[-150px] w-[300px] h-[300px] rounded-full bg-[#FDEEEE] "></div>
     </div>
      {/* Login Container */}
      <div className="w-full max-w-md p-8 relative">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logoapp.png" 
            alt="Cafe Logo" 
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div className="relative">
            <User 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME"
              className="w-full px-10 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#F2CBCB] focus:ring-1 focus:ring-[#F2CBCB] transition-colors text-sm"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="w-full px-10 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#F2CBCB] focus:ring-1 focus:ring-[#F2CBCB] transition-colors text-sm"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F2CBCB] text-white rounded-lg hover:bg-opacity-90 transition-opacity font-medium text-sm"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;