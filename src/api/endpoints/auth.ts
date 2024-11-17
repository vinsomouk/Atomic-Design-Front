import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkAuth: builder.query<any, void>({
            query: () => '/api/me',
            transformResponse(response: any) {
                return response;
            },
            providesTags: [{ type: 'Auth', id: 'STATUS' }],
        }),
        login: builder.mutation<any, { email: string, password: string }>({
            query: (credentials) => ({
                url: '/api/login_check',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: any) => {
                console.log('Login response:', response); // Log pour vérifier la réponse de connexion
                if (response?.token) {
                    localStorage.setItem('accessToken', response.token);
                    console.log('Token stored in localStorage:', response.token); // Log pour vérifier le stockage du token
                } else {
                    console.log('No token received in login response.'); // Log si pas de token
                }
                return response;
            },
            invalidatesTags: [{ type: 'Auth', id: 'STATUS' }],
        }),
    }),
});

export const {
    useCheckAuthQuery,
    useLoginMutation,
} = authApi;