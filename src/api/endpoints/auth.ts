// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }), // URL de base sans le chemin de l'endpoint
    endpoints: (builder) => ({
        checkAuth: builder.query<any, void>({
            query: () => '/login_check/me', // Endpoint pour vérifier l'utilisateur
        }),
    }),
});

export const { useCheckAuthQuery } = api;
export default api;