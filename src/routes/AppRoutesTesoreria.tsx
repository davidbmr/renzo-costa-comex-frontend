import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Tesoreria } from "@/features/tesoreria/Tesoreria/Tesoreria";
import { Flujo } from "@/features/tesoreria/Etapas/steps/SaldosIniciales/Flujo/Flujo";
import { Etapas } from "@/features/tesoreria/Etapas/Etapas";
import { ComexFinanciamiento } from "@/features/tesoreria/Etapas/steps/RevisionObligaciones/features/ComexFinanciamiento/ComexFinanciamiento";
import { PolizaSeguros } from "@/features/tesoreria/Etapas/steps/RevisionObligaciones/features/PolizaSeguros/PolizaSeguros";
import { AccionistasAlquileres } from "@/features/tesoreria/Etapas/steps/RevisionObligaciones/features/AccionistasRegalias/AccionistasRegalias";
import { CreateAccionistas } from "@/features/tesoreria/Etapas/steps/RevisionObligaciones/features/AccionistasRegalias/Create/CreateAccionistas";
import { PrestamoAccionistas } from "@/features/tesoreria/Etapas/steps/RevisionObligaciones/features/PrestamosAccionistas/PrestamoAccionistas";

export const AppRoutesTesoreria = () => {
	return (
		<AppStructure>
			<HeaderModule />

			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<Tesoreria />} />
					<Route path="/etapas-tesoreria" element={<Etapas />} />
					<Route path="/etapas-tesoreria/saldos-iniciales/creacion" element={<Flujo />} />
					{/* <Route path="/etapas-tesoreria/revision-obligaciones" element={<ComexFinanciamiento/>}/> */}
					<Route
						path="/etapas-tesoreria/revision-obligaciones/comex-financiamiento"
						element={<ComexFinanciamiento />}
					/>
					<Route
						path="/etapas-tesoreria/revision-obligaciones/poliza-seguros"
						element={<PolizaSeguros />}
					/>
					<Route
						path="/etapas-tesoreria/revision-obligaciones/comex-financiamiento"
						element={<ComexFinanciamiento />}
					/>
					<Route
						path="/etapas-tesoreria/revision-obligaciones/alquiler-accionistas-regalias"
						element={<AccionistasAlquileres />}
					/>
					<Route
						path="/etapas-tesoreria/revision-obligaciones/alquiler-accionistas-regalias/crear"
						element={<CreateAccionistas />}
					/>
					<Route
						path="/etapas-tesoreria/revision-obligaciones/prestamo-accionistas"
						element={<PrestamoAccionistas />}
					/>
				</Routes>
			</div>
		</AppStructure>
	);
};
