import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    isLoading: boolean;
    login: boolean | null;
    token: string | null;
    loginDate: string | null;
    role: string;
    module: string; // Agregado
    usuario: {
        nombre: string;
        correo: string;
        uid: string;
    } | null;
}

const initialState: AuthState = {
    isLoading: false,
    login: null,
    token: null,
    loginDate: null,
    role: "admin",
    module: "", // Agregado
    usuario: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setLogin: (state, action: PayloadAction<boolean>) => {
            state.login = action.payload;
            state.isLoading = false;
            state.loginDate = action.payload ? new Date().toISOString() : null;
        },
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        },
        setModule: (state, action: PayloadAction<string>) => { // Reducer para module
            state.module = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setUsuario: (state, action: PayloadAction<any>) => {
            state.usuario = action.payload;
        },
        logout: (state) => {
            state.login = null;
            state.token = null;
            state.loginDate = null;
            state.role = "admin";
            state.module = ""; // Reset module on logout
            state.usuario = null;
            localStorage.clear();
        },
    },
});

export const { setLoading, setLogin, setRole, setModule, setToken, setUsuario, logout } = authSlice.actions;
export default authSlice.reducer;
