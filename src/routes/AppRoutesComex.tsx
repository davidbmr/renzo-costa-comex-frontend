import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Comex } from "@/features/comex/Comex/Comex";
import { Etapas } from "@/features/comex/Etapas/Etapas";

export const AppRoutesComex = () => {
	return (
		<AppStructure>
			<HeaderModule />

			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<Comex />} />
					<Route path="/etapas-comercio-exterior" element={<Etapas />} />
				</Routes>
			</div>
		</AppStructure>
	);
};
