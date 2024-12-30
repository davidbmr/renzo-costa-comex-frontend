import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Tesoreria } from "@/features/tesoreria/Tesoreria/Tesoreria";
import { Flujo } from "@/features/tesoreria/flujo/Flujo/Flujo";

export const AppRoutesTesoreria = () => {
	return (
		<AppStructure>
			<HeaderModule />

			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<Tesoreria />} />
					<Route path="/flujo-creacion" element={<Flujo />} />
				</Routes>
			</div>
		</AppStructure>
	);
};
