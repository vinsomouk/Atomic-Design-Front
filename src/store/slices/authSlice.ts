import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interface pour gérer les informations d'authentification
interface AuthState {
    user: null | object; // Utilisateur connecté
    isAuthenticated: boolean;
    publicKey: string | null; // Clé publique
    privateKey: string | null; // Clé privée
    token: string | null; // Token JWT ou autre
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    publicKey: null,
    privateKey: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action pour enregistrer l'utilisateur et son token
        setUser(state, action: PayloadAction<{ user: object, token: string, publicKey: string, privateKey: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.publicKey = action.payload.publicKey;
            state.privateKey = action.payload.privateKey;
            state.isAuthenticated = true;
        },
        // Action pour effacer l'utilisateur et son token
        clearUser(state) {
            state.user = null;
            state.token = null;
            state.publicKey = null;
            state.privateKey = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
