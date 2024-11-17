import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useLoginMutation } from '../../api/endpoints/auth';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = async () => {
        try {
            console.log('Attempting to login with:', { email, password }); // Log pour vérifier les identifiants
            const response = await login({ email, password }).unwrap();
            console.log('Login successful:', response); // Log pour vérifier la réussite de la connexion
            
            
        } catch (err) {
            console.error('Login failed:', err);
            if (err.data) {
                console.log('Error response:', err.status); // Log pour vérifier la réponse d'erreur
            }
        }
    };

    return (
        <div className="login-form">
            <h2 className="my-2 text-xl font-bold">Login Section</h2>
            <Input 
                label="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <Input 
                label="Mot de passe" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <Button onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
        </div>
    );
};

export default LoginForm;