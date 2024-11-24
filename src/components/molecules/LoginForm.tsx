import React, { useState } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useLoginMutation } from '../../api/endpoints/auth';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate


const LoginForm: React.FC<LoginFormProps> = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginUser] = useLoginMutation();
    const navigate = useNavigate(); // Initialiser useNavigate


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        const response = await loginUser({email, password}).unwrap()
        if (response) {
            navigate('/modules'); // Rediriger vers la page home
        }
    };

    

    return (
        <form onSubmit={handleSubmit} className="login-form">
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
            <Button type="submit">Se connecter</Button>
        </form>
    );
};

export default LoginForm;