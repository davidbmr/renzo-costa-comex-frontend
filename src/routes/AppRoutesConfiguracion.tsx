import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./AppRoutes.module.css";

import { AppStructure } from "../components/AppStructure/AppStructure";
import { HeaderModule } from "@/components/HeaderModule/HeaderModule";

import { Configuracion } from "@/features/configuracion/Configuracion/Configuracion";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { AppRoutes } from "./AppRoutes";
import { appRoutesConf } from "@/data/Rutas";
import { Users } from "@/features/configuracion/subpages/Users/Users";
import { Rol } from "@/features/configuracion/subpages/Rol/Rol";
import { Provider } from "@/features/configuracion/subpages/Provider/Provider";
import { Products } from "@/features/configuracion/subpages/Products/Products";
import { Model } from "@/features/configuracion/subpages/Model/Model";
import { Bank } from "@/features/configuracion/subpages/Bank/Bank";


export const AppRoutesConfiguracion = ({
  selectedModule,
}: {
  selectedModule: string;
}) => {
  const [isResponsiveMenu, setIsResponsiveMenu] = useState(false);
  const containerClassName = isResponsiveMenu
    ? `${style.mainContent__container} ${style.containerWithMenu}`
    : style.mainContent__container;



  return (
    <AppStructure>
      {/* <HeaderModule /> */}
      <div className={containerClassName}>
        <Sidebar appRoutes={appRoutesConf} isResponsiveMenu={isResponsiveMenu} />
        {/* <MainHeader additionalClassName={style.mainHeaderContainer} /> */}
        <div className={style.routesContainer}>
          <Routes>
            <Route path="/" element={<Configuracion />} />
            <Route path="/rol" element={<Rol />} />
            <Route path="/provider" element={<Provider />} />
            <Route path="/products" element={<Products />} />
            <Route path="/model" element={<Model />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/users" element={<Users />} />
           
            {/* <Route path="/etapas-comercio-exterior" element={<Etapas />} /> */}
          </Routes>
        </div>
      </div>
    </AppStructure>
  );
};
