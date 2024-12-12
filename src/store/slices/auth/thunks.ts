import { AppThunk } from "@/store/store";
import { setLoading, setLogin, setRole, setToken, setUsuario, logout, setModule } from "./authSlice";

const STATIC_TOKEN = "token_renzo_costa";

export const loginUser = (selectedModule: string): AppThunk => (dispatch) => {
    dispatch(setLoading(true));

    try {
        const mockUser = {
            nombre: "Admin",
            correo: "admin@example.com",
            uid: "admin-uid",
        };

        // Simular login exitoso
        dispatch(setToken("token_renzo_costa"));
        dispatch(setUsuario(mockUser));
        dispatch(setRole("admin"));
        dispatch(setModule(selectedModule));  // Asegúrate de pasar correctamente el módulo
        dispatch(setLogin(true));

        // Guardar en localStorage
        localStorage.setItem("token", "token_renzo_costa");
        localStorage.setItem("usuario", JSON.stringify(mockUser));
        localStorage.setItem("module", selectedModule); // Asegúrate de guardarlo en el localStorage

    } catch (error) {
        console.error("Login estático falló:", error);
        dispatch(setLogin(false));
    } finally {
        dispatch(setLoading(false));
    }
};



export const initializeAuth = (): AppThunk => (dispatch) => {
    const token = localStorage.getItem("token");
    const usuario = localStorage.getItem("usuario");

    if (token === STATIC_TOKEN && usuario) {
        dispatch(setToken(token));
        dispatch(setUsuario(JSON.parse(usuario)));
        dispatch(setLogin(true));
    } else {
        dispatch(setLogin(false));
    }
};

export const logoutUser = (): AppThunk => (dispatch) => {
    localStorage.clear();
    dispatch(logout());
};
