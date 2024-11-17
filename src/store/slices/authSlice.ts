import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    user: null | object;
    isAuthenticated: boolean;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser (state, action: PayloadAction<{ user: object; token: string }>) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        clearUser (state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser , clearUser  } = authSlice.actions;
export default authSlice.reducer;