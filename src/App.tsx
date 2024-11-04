import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { AuthWrapper } from './components/authWrapper';
import MainLayout from './components/templates/MainLayout'
 import LoginTemplates from './components/templates/LoginTemplate'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AuthWrapper>
            <MainLayout children={ <LoginTemplates /> } />
            </AuthWrapper>
        </Provider>
    );
};

export default App;





