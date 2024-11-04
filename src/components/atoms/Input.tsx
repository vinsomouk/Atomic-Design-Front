// src/components/atoms/Input.tsx
import React from 'react';

interface InputProps {
    label: string;
    type?: string; // Type est optionnel
    value: string; // Value est requis
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Typage de l'événement
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500" 
            />
        </div>
    );
};

export default Input;