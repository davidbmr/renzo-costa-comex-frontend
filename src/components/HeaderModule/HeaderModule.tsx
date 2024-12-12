import React from "react";
import style from "./HeaderModule.module.css";
import logoTransparente from "@/assets/renzo-costa-transparente.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { logoutUser } from "@/store/slices/auth";

export const HeaderModule = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const logout = () => {
		localStorage.clear();
		dispatch(logoutUser());
		setTimeout(() => {
			navigate("/login");
		}, 1000);
	};

	return (
		<div className={style.headerModule__container}>
			<img className={style.headerModule__img} src={logoTransparente} alt="logo de renzo costa" />
			<div style={{ display: "flex", gap: "20px" }}>
				<button className={style.headerModule__buttonClose} onClick={() => navigate("/modules")}>
					Volver a modulos
				</button>

				<button className={style.headerModule__buttonClose} onClick={() => logout()}>
					Cerrar sesión
				</button>
			</div>
		</div>
	);
};
