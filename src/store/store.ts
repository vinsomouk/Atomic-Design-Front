// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import api from '../api/endpoints/auth';

// Configuration du store Redux
const store = configureStore({
    reducer: {
        auth: authReducer, // Reducer d'authentification
        [api.reducerPath]: api.reducer, // Ajoutez le reducer de l'API ici
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware), // Ajoutez le middleware de l'API
});

// Export du store
export default store;