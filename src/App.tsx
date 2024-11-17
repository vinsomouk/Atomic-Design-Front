import React from 'react';
import { AuthWrapper } from './components/authWrapper';
import MainLayout from './components/templates/MainLayout'
 import LoginTemplates from './components/templates/LoginTemplate'

const App: React.FC = () => {
    return (
            
            <MainLayout children={ <LoginTemplates /> } />
            
    );
};

export default App;





