// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default Button;