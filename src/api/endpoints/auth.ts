import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Définissez la mutation pour la connexion
        login: builder.mutation<{ token: string }, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/login_check', 
                method: 'POST',
                body: credentials,
            }),
        }),
        // Endpoint pour vérifier l'authentification
        checkAuth: builder.query<any, void>({
            query: () => '/login_check', 
        }),
    }),
});

// Exportez les hooks générés par Redux Toolkit
export const { useCheckAuthQuery, useLoginMutation } = api;
export default api;