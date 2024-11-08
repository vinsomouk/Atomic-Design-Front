// src/components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useLoginMutation } from '../../api/endpoints/auth';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    errorMessage?: string; // Ajout d'une prop pour les messages d'erreur
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, error }] = useLoginMutation(); // Utilisez le hook pour la connexion

    const handleLogin = async () => {
        try {
            const response = await login({ email, password }).unwrap(); // Appelez la mutation
            const token = response.token; // Assurez-vous que votre API renvoie le token
            localStorage.setItem('token', token); // Stockez le token
            onLogin(email, password); // Appelez la fonction onLogin si nécessaire
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    // Fonction pour obtenir le message d'erreur
    const getErrorMessage = (error: any) => {
        if ('status' in error) {
            // Si l'erreur a un statut, c'est probablement un FetchBaseQueryError
            return `Erreur ${error.status}: ${error.data?.message || 'Une erreur est survenue.'}`;
        } else if ('message' in error) {
            // Si l'erreur a un message, c'est probablement un SerializedError
            return error.message;
        }
        return 'Une erreur inconnue est survenue.';
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
            {error && <p className="text-red-500">{getErrorMessage(error)}</p>} {/* Affichage des erreurs de connexion */}
            <div className="flex flex-row justify-center items-center">
                <p className="p-2">Keep me logged in</p>
                <input type="checkbox" />
            </div>
            <Button label={isLoading ? "Connexion..." : "Se connecter"} onClick={handleLogin} />
            <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:text-sky-700">Réinitialiser</a></p>
        </>
    );
};

export default LoginForm;