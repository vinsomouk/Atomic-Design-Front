import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/login_check' }), 
    endpoints: (builder) => ({
        checkAuth: builder.query<any, void>({
            query: () => '/me', // Endpoint pour vérifier l'utilisateur
        }),
    }),
});

export const { useCheckAuthQuery } = api;
export default api;