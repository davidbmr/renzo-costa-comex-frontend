import React, { useEffect, useState } from "react";
import style from "./RevisionObligaciones.module.css";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { useNavigate } from "react-router-dom";


export const RevisionObligaciones = () => {

  const navigate = useNavigate();
  
    const features = [
      {
        id: 1,
        title: "COMEX Y FINANCIAMIENTO",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/comex-financiamiento",
      },
      {
        id: 2,
        title: "POLIZA DE SEGUROS",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/poliza-seguros",
      },
      {
        id: 3,
        title: "ALQUILER DE ACCIONISTAS Y REGALIAS",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/alquiler-accionistas-regalias",
      },
      {
        id: 4,
        title: "PRÉSTAMOS DE ACCIONISTAS",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/prestamo-accionistas",
      },
      {
        id: 5,
        title: "DIVIDENDOS",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/dividendos",
      },
      {
        id: 6,
        title: "TARJETAS DE CRÉDITOS",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/tarjetas-de-credito",
      },
      {
        id: 7,
        title: "CARTA DE FIANZA",
        url: "/tesoreria/etapas-tesoreria/revision-obligaciones/carta-fianza",
      },
    ];


	return (
		<>
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Revisión de Obligaciones</h2>
			
      <div className={style.gridContainer}>
				{features.map((feature) => (
					<div key={feature.id} className={style.featureCard} onClick={() => navigate(feature.url)}>
						<h3 className={style.title}>{feature.title}</h3>
					</div>
				))}
			</div>

			<ConfirmacionEtapa />

			
		</>
	);
};
