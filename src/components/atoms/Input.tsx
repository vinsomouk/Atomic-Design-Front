// src/components/atoms/Input.tsx
import React from 'react';

// src/components/atoms/Input.tsx

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string; // Optionnel, par défaut 'text'
    required?: boolean; // Ajoutez cette ligne
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