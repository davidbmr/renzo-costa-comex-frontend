import React from "react";
import style from "./GestionFinanciera.module.css";

import { useNavigate } from "react-router-dom";

export const GestionFinanciera = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      title: "SALDOS BANCARIOS",
      url: "#",
    },
    {
      id: 2,
      title: "SALDOS BANCARIOS POR CUENTAS BANCARIAS",
      url: "#",
    },
    {
      id: 3,
      title: "OTRAS CUENTAS BANCARIAS",
      url: "#",
    },
    {
      id: 4,
      title: "FLUJO COMEX",
      url: "#",
    },
    {
      id: 5,
      title: "COMEX BBVA",
      url: "#",
    },
    {
      id: 6,
      title: "FUENTE",
      url: "#",
    },
    {
      id: 7,
      title: "CUENTAS BANCARIAS",
      url: "#",
    },
  ];
  const flujos = [
    {
      id: 1,
      title: "MODELO GERENCIAL GENERAL",
      url: "#",
    },
    {
      id: 2,
      title: "CONSOLIDADO",
      url: "#",
    },
    {
      id: 3,
      title: "FLUJO DE EFECTIVO",
      url: "#",
    },
    {
      id: 4,
      title: "VENTAS PROYECTADAS",
      url: "#",
    },
    {
      id: 5,
      title: "RESUMEN",
      url: "#",
    },
    {
      id: 6,
      title: "GASTOS VENTAS ADMINISTRACIÓN",
      url: "#",
    },
    {
      id: 7,
      title: "GASTOS AGRUPADOS",
      url: "#",
    },
    {
      id: 8,
      title: "ESCENARIO TIPO DE CAMBIO",
      url: "#",
    },
  ];
  const tiposCambios = [
    {
      id: 1,
      title: "NEGOCIACIÓN TIPO DE CAMBIO - DÓLAR - SOL",
      url: "#",
    },
    {
      id: 2,
      title: "NEGOCIACIÓN TIPO DE CAMBIO - EURO - DÓLAR",
      url: "#",
    },
  ];
  const depositos = [
    {
      id: 1,
      title: "RESUMEN",
      url: "#",
    },
    {
      id: 2,
      title: "DEPÓSITOS",
      url: "#",
    },
    {
      id: 3,
      title: "CRONOGRAMA DE DEPÓSITOS",
      url: "#",
    },
    {
      id: 4,
      title: "PLANIFICACIÓN DE DEPÓSITOS",
      url: "#",
    },
  ];
  const financiamientos = [
    {
      id: 1,
      title: "CONTROL RESUMEN",
      url: "#",
    },
    {
      id: 2,
      title: "PAGARÉ",
      url: "#",
    },
    {
      id: 3,
      title: "LEASING",
      url: "#",
    },
    {
      id: 4,
      title: "CARTA DE CRÉDITO",
      url: "#",
    },
    {
      id: 5,
      title: "LETRAS",
      url: "#",
    },
    {
      id: 6,
      title: "PAGARÉ SCOTIABANK",
      url: "#",
    },
    {
      id: 7,
      title: "PAGARÉ BCP",
      url: "#",
    },
    {
      id: 8,
      title: "PRÉSTAMO GERENCIA GENERAL",
      url: "#",
    },
    {
      id: 9,
      title: "TABLA RESUMEN PAGARÉ",
      url: "#",
    },
  ];
  return (
    <>
      <h2 className={style.title__container}>
        Saldos Bancarios
      </h2>

      <div className={style.gridContainer}>
        {features.map((feature) => (
          <div
            key={feature.id}
            className={style.featureCard}
            onClick={() => navigate(feature.url)}
          >
            <h3 className={style.title}>{feature.title}</h3>
          </div>
        ))}
      </div>

      <h2 className={style.title__container}>
      Flujo de efectivo mensual proyectado
      </h2>

      <div className={style.gridContainer}>
        {flujos.map((feature) => (
          <div
            key={feature.id}
            className={style.featureCard}
            onClick={() => navigate(feature.url)}
          >
            <h3 className={style.title}>{feature.title}</h3>
          </div>
        ))}
      </div>

      <h2 className={style.title__container}>
      Negociación Tipo de cambio
      </h2>

      <div className={style.gridContainer}>
        {tiposCambios.map((feature) => (
          <div
            key={feature.id}
            className={style.featureCard}
            onClick={() => navigate(feature.url)}
          >
            <h3 className={style.title}>{feature.title}</h3>
          </div>
        ))}
      </div>

      <h2 className={style.title__container}>
      Reporte de deposito a plazo
      </h2>

      <div className={style.gridContainer}>
        {depositos.map((feature) => (
          <div
            key={feature.id}
            className={style.featureCard}
            onClick={() => navigate(feature.url)}
          >
            <h3 className={style.title}>{feature.title}</h3>
          </div>
        ))}
      </div>

      <h2 className={style.title__container}>
      Reporte de financiamientos
      </h2>

      <div className={style.gridContainer}>
        {financiamientos.map((feature) => (
          <div
            key={feature.id}
            className={style.featureCard}
            onClick={() => navigate(feature.url)}
          >
            <h3 className={style.title}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
};
