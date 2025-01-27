import React, { useState } from "react";
import style from "./Login.module.css";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLogin, setRole, setToken, setUsuario } from "@/store/slices/auth";
import { SelectField } from "@/components/SelectField/SelectField";
import {
  appRoutesComex,
  appRoutesGestionFinanciera,
  appRoutesTesoreria,
} from "@/data/Rutas";

import logo from "@/assets/LogoDefault.png";
import axios from "axios";
import { url } from "@/connections/mainApi";

export const Login: React.FC = () => {
  const [user, setUser] = useState({ correo: "", contraseña: "" });
  const [role, setRoleSelection] = useState("admin");
  const [selectedModule, setSelectedModule] = useState("");
  const Authclg = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${url}/auth/login`, {
        email: user.correo,
        password: user.contraseña,
      });

      const { user: usuario, token } = response.data;

      dispatch(setLogin(true));
      dispatch(setRole(usuario.role.name));
      dispatch(setToken(token));
      dispatch(
        setUsuario({
          nombre: usuario.name,
          correo: usuario.email,
          uid: usuario.id,
        })
      );

      localStorage.setItem("rt__renzo__costa", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));

      navigate("/");
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "Error al iniciar sesión";
    } finally {
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.overlayContainer}>
        <div className={style.overlay}></div>
      </div>

      <div className={`${style.form__container__layout}`}>
        <div className={`${style.form__container}`}>
          <div style={{ width: "auto", margin: "0 auto" }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "100%", height: "80px", objectFit: "cover" }}
            />
          </div>

          <div className={style.headerContainer}>
            <h2>Bienvenido</h2>
            <p>Ingresa tus datos para acceder al sistema.</p>
          </div>

          <TextBoxField
            textLabel="Correo:"
            value={user.correo}
            name="correo"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />

          <TextBoxField
            textLabel="Contraseña:"
            value={user.contraseña}
            name="contraseña"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            type="password"
          />

          <CustomButton
            text="INGRESAR"
            backgroundButton="var(--primary-color-app)"
            colorP="#fff"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};
