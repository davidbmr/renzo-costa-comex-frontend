import React from "react";
import style from "./Modules.module.css";

import { useNavigate } from "react-router-dom";

import logo from "@/assets/renzo-costa-transparente.png";

export const Modules = () => {
	const navigate = useNavigate();

	const features = [
		{
			id: 1,
			title: "COMEX",
			description: "Módulo de comercio exterior",
			action: "Ingresar al módulo",
			url: "/comex",
		},
		{
			id: 2,
			title: "Gestión financiera",
			description: "Módulo de gestión financiera",
			action: "Ingresar al módulo",
			url: "/gestion-financiera",
		},
		{
			id: 3,
			title: "Tesorería",
			description: "Módulo de tesorería",
			action: "Ingresar al módulo",
			url: "/tesoreria",
		},
		{
			id: 3,
			title: "Configuración",
			description: "Módulo de configuración",
			action: "Ingresar al módulo",
			url: "#",
		},
	];

	return (
		<>
			<div className={style.banner__modules}>
				<img src={logo} alt="logo renzo costa" className={style.banner_modules__img} />
			</div>
			<div className={style.gridContainer}>
				{features.map((feature) => (
					<div key={feature.id} className={style.featureCard}>
						<h3 className={style.title}>{feature.title}</h3>
						<p className={style.description}>{feature.description}</p>
						<button className={style.actionButton} onClick={() => navigate(feature.url)}>
							{feature.action}
						</button>
					</div>
				))}
			</div>
		</>
	);
};
