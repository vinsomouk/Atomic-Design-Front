import React, { useState } from "react";
import LoginSection from "../organisms/LoginSection";
import CompanySection from "../organisms/CompanySection";
import { useDispatch } from 'react-redux';
import { setUser , clearUser  } from "../../store/slices/authSlice";

const LoginTemplates: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    const onLogin = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                dispatch(setUser (data)); // Met à jour l'utilisateur dans Redux
                setErrorMessage(''); // Réinitialise le message d'erreur
            } else {
                setErrorMessage(data.message || 'Erreur de connexion'); // Affiche le message d'erreur
                dispatch(clearUser ()); // Réinitialise l'utilisateur
            }
        } catch (error: unknown) { // Spécifiez le type ici
            if (error instanceof Error) {
                setErrorMessage('Erreur de connexion : ' + error.message);
            } else {
                setErrorMessage('Erreur de connexion inconnue');
            }
            dispatch(clearUser ());
        }
    };

    return (  
        <div className="flex h-screen bg-gray-100">
            <LoginSection onLogin={onLogin} errorMessage={errorMessage} />
            <CompanySection />
        </div>
    );
}

export default LoginTemplates;