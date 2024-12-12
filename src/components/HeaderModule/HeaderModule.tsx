import React from "react";
import style from "./HeaderModule.module.css";
import logoTransparente from "@/assets/renzo-costa-transparente.png";
import { useNavigate } from "react-router-dom";

export const HeaderModule = () => {
	const navigate = useNavigate();

	return (
		<div className={style.headerModule__container}>
			<img className={style.headerModule__img} src={logoTransparente} alt="logo de renzo costa" />

			<button className={style.headerModule__buttonClose} onClick={() => navigate("/modules")}>
				Volver a modulos
			</button>
		</div>
	);
};
