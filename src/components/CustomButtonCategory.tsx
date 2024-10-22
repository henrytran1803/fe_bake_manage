import React, { ReactNode, MouseEventHandler } from 'react';



interface CustomButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
  }
  const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick, className }) => {
    return (
    <button
      className={`px-4 py-2 min-w-[150px]  max-w-[250px] min-h-[150px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 bg-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${className}`}
      
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;