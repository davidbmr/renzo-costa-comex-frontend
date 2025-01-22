import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";
import { GestionFinanciera } from "@/features/gestionFinanciera/GestionFinanciera/GestionFinanciera";
import { SaldosBanacarios } from "@/features/gestionFinanciera/features/SaldosBancarios/SaldosBancarios";
import { Detalle } from "@/features/gestionFinanciera/features/SaldosBancarios/Detalle/Detalle";


export const AppRoutesGestionFinanciera = () => {
	return (
		<AppStructure>
			<HeaderModule />

			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<GestionFinanciera />} />
					<Route path="/saldos-bancarios" element={<SaldosBanacarios />} />
					<Route path="/saldos-bancarios/detalle" element={<Detalle />} />
					
				</Routes>
			</div>
		</AppStructure>
	);
};
