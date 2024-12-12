import React, { useState } from "react";
import style from "./Login.module.css";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLogin, setRole, setToken, setUsuario } from "@/store/slices/auth";
import { SelectField } from "@/components/SelectField/SelectField";
import { appRoutesComex, appRoutesGestionFinanciera, appRoutesTesoreria } from "@/data/Rutas";

export const Login: React.FC = () => {
	const [user, setUser] = useState({ correo: "", contraseña: "" });
	const [role, setRoleSelection] = useState("admin");
	const [selectedModule, setSelectedModule] = useState("");
	const Authclg = useAppSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleLogin = () => {
		const mockUser = {
			nombre: "Admin",
			correo: "admin@example.com",
			uid: "admin-uid",
		};

		const token = "token_renzo_costa";

		let appRoutes = [];
		if (selectedModule === "comex") {
			appRoutes = appRoutesComex;
		} else if (selectedModule === "financiero") {
			appRoutes = appRoutesGestionFinanciera;
		} else if (selectedModule === "tesoreria") {
			appRoutes = appRoutesTesoreria;
		}

		dispatch(setLogin(true));
		dispatch(setRole(role));
		dispatch(setToken(token));
		dispatch(setUsuario(mockUser));

		localStorage.setItem("token", token);
		localStorage.setItem("usuario", JSON.stringify(mockUser));

		navigate("/");
	};
	console.log(Authclg);
	return (
		<div className={style.loginContainer}>
			<div className={style.overlayContainer}>
				<div className={style.overlay}></div>
			</div>

			<div className={`${style.form__container__layout}`}>
				<div className={`${style.form__container}`}>
					<div style={{ width: "auto", margin: "0 auto" }}>
						<img
							src="/src/assets/logo.svg"
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
						onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
					/>

					<TextBoxField
						textLabel="Contraseña:"
						value={user.contraseña}
						name="contraseña"
						onChange={(e) => setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
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
