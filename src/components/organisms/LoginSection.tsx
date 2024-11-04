import React from "react";
import LoginForm from "../molecules/LoginForm";

interface LoginSectionProps {
    onLogin: (email: string, password: string) => void;
    errorMessage?: string; // Ajout d'une prop pour les messages d'erreur
}

const LoginSection: React.FC<LoginSectionProps> = ({ onLogin, errorMessage }) => {
    return (  
        <div className="flex flex-col justify-center items-center w-2/4 px-5">
            <LoginForm onLogin={onLogin} errorMessage={ errorMessage} />
        </div>
    );
}

export default LoginSection;