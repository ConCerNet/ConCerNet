import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    
    const loginAction = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/auth/login', data)

            const { usuario } = response.data;
            setUser(usuario.nombre);
            setToken(usuario.contraseña);
            localStorage.setItem("site", usuario.contraseña);

            // Verifica el rol del usuario para decidir la redirección
            if (usuario.idrol === 1) {
                navigate("/Dashboard_admin");
            } else {
                navigate("/Dashboard");
            }
        } catch (error) {
            alert("Usuario o contraseña incorrectos")
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        //navigate("/Dashboard");
    };
    
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

//Hook personalizado
export const useAuth = () => {
    return useContext(AuthContext);
};