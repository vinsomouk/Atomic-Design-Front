import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
        credentials: 'include',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem('accessToken');
            console.log('Token from localStorage:', accessToken); // Log pour vérifier le token
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
                console.log('Headers prepared with token:', accessToken); // Log pour vérifier les en-têtes
            } else {
                console.log('No token found, headers will not include Authorization.'); // Log si pas de token
            }
            return headers;
        },
    }),
    tagTypes: ['Auth', 'Modules', 'Students', 'Teachers'],
    endpoints: () => ({}),
});