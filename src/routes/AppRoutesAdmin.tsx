import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { Sidebar } from "../components/Sidebar/Sidebar";
import { MainHeader } from "../components/MainHeader/MainHeader";
import { AppStructure } from "../components/AppStructure/AppStructure";

import { Mantenimientos } from "../features/mantenimientos/pages/Mantenimientos";
import Proveedores from "@/features/mantenimientos/subpages/Proveedores/Proveedores";
import Pedidos from "@/features/mantenimientos/subpages/Pedidos/Pedidos";
import SolicitudesPresupuesto from "@/features/mantenimientos/subpages/SolicitudesPresupuesto/SolicitudesPresupuesto";
import { appRoutesComex, appRoutesGestionFinanciera, appRoutesTesoreria } from "@/data/Rutas";
import { Resumen } from "@/features/mantenimientos/subpages/importaciones/Resumen/Resumen";
import { Abonos } from "@/features/mantenimientos/subpages/importaciones/Abonos/Abonos";

export const AppRoutesAdmin = ({ selectedModule }: { selectedModule: string }) => {
	const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);
	const containerClassName = isResponsiveMenu
		? `${style.mainContent__container} ${style.containerWithMenu}`
		: style.mainContent__container;

	const setMenuResize = () => {
		setIsResponsiveMenu((prev) => !prev);
	};

	// Seleccionar las rutas en base al módulo
	let appRoutes = appRoutesComex; // Default
	if (selectedModule === "comex") {
		appRoutes = appRoutesComex;
	} else if (selectedModule === "financiero") {
		appRoutes = appRoutesGestionFinanciera;
	} else if (selectedModule === "tesoreria") {
		appRoutes = appRoutesTesoreria;
	}

	return (
		<AppStructure>
			<div className={containerClassName}>
				<Sidebar appRoutes={appRoutes} isResponsiveMenu={isResponsiveMenu} />
				<MainHeader additionalClassName={style.mainHeaderContainer} />
				<div className={style.routesContainer}>
					<Routes>
						<Route path="/" element={<Mantenimientos />} />
						<Route path="/proveedores" element={<Proveedores />} />
						<Route path="/pedidos" element={<Pedidos />} />
						<Route path="/solicitud-presupuesto" element={<SolicitudesPresupuesto />} />
						<Route path="/resumen" element={<Resumen />} />
						<Route path="/abonos" element={<Abonos />} />
					</Routes>
				</div>
			</div>
		</AppStructure>
	);
};
