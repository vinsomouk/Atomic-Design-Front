// src/components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    errorMessage?: string; // Ajout d'une prop pour les messages d'erreur
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(email, password); // Appel de la fonction onLogin avec les valeurs des champs
    };

    return (
        <>
            <h2 className="my-2 text-xl font-bold">Login Section</h2>
            <Input 
                label="Email" 
                value={email} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            />
            <Input 
                label="Mot de passe" 
                type="password" 
                value={password} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Affichage du message d'erreur */}
            <div className="flex flex-row justify-center items-center">
                <p className="p-2">Keep me logged in</p>
                <input type="checkbox" />
            </div>
            <Button label="Se connecter" onClick={handleLogin} />
            <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:text-sky-700">Réinitialiser</a></p>
        </>
    );
};

export default LoginForm;