// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode; // Ajoutez cette ligne pour accepter les enfants
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;