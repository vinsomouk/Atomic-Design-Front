import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded w-3/4 hover:bg-sky-700 transition duration-500 ease-in-out">
      {label}
    </button>
  );
};

export default Button;