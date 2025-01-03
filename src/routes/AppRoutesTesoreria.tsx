import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Tesoreria } from "@/features/tesoreria/Tesoreria/Tesoreria";
import { Flujo } from "@/features/tesoreria/Etapas/steps/SaldosIniciales/Flujo/Flujo";
import { Etapas } from "@/features/tesoreria/Etapas/Etapas";

export const AppRoutesTesoreria = () => {
	return (
		<AppStructure>
			<HeaderModule />

			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<Tesoreria />} />
					<Route path="/etapas-tesoreria" element={<Etapas />} />
					<Route path="/etapas-tesoreria/saldos-iniciales/creacion" element={<Flujo/>}/>
				</Routes>
			</div>
		</AppStructure>
	);
};
