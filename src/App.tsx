import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importer Router et Routes
import { AuthWrapper } from './components/wrappers/authWrapper';
import MainLayout from './components/templates/MainLayout';
import LoginTemplates from './components/templates/LoginTemplate';
import ModuleList from './components/molecules/ModuleList';

const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<LoginTemplates />} /> {/* Route pour la page de connexion */}
                    <Route path="/modules" element={<ModuleList />} /> {/* Route pour la liste des modules */}
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;




