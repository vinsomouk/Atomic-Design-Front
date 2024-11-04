// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

// Configuration du store Redux
const store = configureStore({
    reducer: {
        auth: authReducer, // Ajoutez le reducer d'authentification ici
        // Vous pouvez ajouter d'autres reducers ici si nécessaire
    },
});

// Export du store
export default store;