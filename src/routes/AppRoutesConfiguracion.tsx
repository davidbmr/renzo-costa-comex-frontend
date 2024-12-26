import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Configuracion } from "@/features/configuracion/Configuracion/Configuracion";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { AppRoutes } from "./AppRoutes";
import { appRoutesConf, appRoutesComex, appRoutesGestionFinanciera, appRoutesTesoreria } from "@/data/Rutas";

export const AppRoutesConfiguracion = ({ selectedModule }: { selectedModule: string }) => {
  const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);
	const containerClassName = isResponsiveMenu
		? `${style.mainContent__container} ${style.containerWithMenu}`
		: style.mainContent__container;

// Seleccionar las rutas en base al módulo
  let appRoutes = appRoutesConf; // Default
  if (selectedModule === "configuracion") {
    appRoutes = appRoutesConf;
  }  else if (selectedModule === "comex") {
    appRoutes = appRoutesComex;
  } else if (selectedModule === "financiero") {
    appRoutes = appRoutesGestionFinanciera;
  } else if (selectedModule === "tesoreria") {
    appRoutes = appRoutesTesoreria;
  }
    

	return (
		<AppStructure>
			{/* <HeaderModule /> */}
      <div className={containerClassName}>
				<Sidebar appRoutes={appRoutes} isResponsiveMenu={isResponsiveMenu} />
				{/* <MainHeader additionalClassName={style.mainHeaderContainer} /> */}
			<div className={style.routesContainer}>
				<Routes>
					<Route path="/" element={<Configuracion />} />
					{/* <Route path="/etapas-comercio-exterior" element={<Etapas />} /> */}
				</Routes>
			</div>
      </div>
		</AppStructure>
	);
};
