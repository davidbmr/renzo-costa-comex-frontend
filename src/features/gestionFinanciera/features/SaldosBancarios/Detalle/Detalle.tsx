import React, { useState } from "react";
import styles from "./Detalle.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { FaCoins, FaDollarSign } from "react-icons/fa";
import { Divider } from "primereact/divider";

export const Detalle = () => {
  const [data, setData] = useState([]);

  const mapping = {
    fecha: "Fecha",
    ingresosProyectadosSoles: "Ingresos Proyectados en Soles",
    ingresosProyectadosDolares: "Ingresos Proyectados en Dólares",
    obligacionesSoles: "Obligaciones en Soles",
    obligacionesDolares: "Obligaciones en Dólares",
    totalObligacionesSoles: "Total de Obligaciones en Soles",
    totalObligacionesDolares: "Total de Obligaciones en Dólares",
    saldoFinalSoles: "Saldo Final Soles",
    saldoFinalDolares: "Saldo Final Dólares",
    estado: "Estado",
  };

   const handleNavigate = () => {
    const url = "https://app.powerbi.com/view?r=eyJrIjoiNzEyZWI3YTEtYmUwNi00NTRjLTg4NjctZDdiMjljZTYxMTE2IiwidCI6ImI0YTQwNTQ1LTc3NzktNGIzOC1hZmY3LTFmMTczOGY4MDg0MCIsImMiOjR9";
    window.open(url, "_blank");
  };

  return (
    <>
      <MainContentStructure>
        <h2 style={{ color: "#333", textTransform: "uppercase" }}>
          Saldos Bancarios
        </h2>
        <div className={styles.btnContainer}>
          <div className={styles.btnContent}>
            <CustomButton
              text="CREAR"
              backgroundButton="#9B1139"
              colorP="white"
            />
            <GenerateExcelButton
              data={data}
              mapping={mapping}
              sheetName="SaldosBancarios"
            />
          </div>
        </div>

        <DataTable
          columns={columns || []}
          dataKey="banco"
          data={banco || []}
          isHeaderActive={false}
          isPaginator={false}
          onUpdate={() => {}}
          children={
            <div className={styles.totalContainer}>
              <div className={styles.totalBlock}>
                <div className={styles.totalItem}>
                  <FaCoins className={styles.icon} />
                  <div>
                    <p className={styles.label}>Saldo Inicial en Soles</p>
                    <span className={styles.value}>{`S/ 760,729`}</span>
                  </div>
                </div>
                <Divider layout="vertical" />
                <div className={styles.totalItem}>
                  <FaDollarSign className={styles.icon} />
                  <div>
                    <p className={styles.label}>Saldo Inicial en Dólares</p>
                    <span className={styles.value}>{`$ 190,958`}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <br />
        <DataTable
          columns={columns2 || []}
          dataKey="banco"
          data={data2 || []}
          isHeaderActive={false}
          isPaginator={false}
          onUpdate={() => {}}
          children={
            <div className={styles.totalContainer}>
              <div className={styles.totalBlock}>
                <div className={styles.totalItem}>
                  <FaCoins className={styles.icon} />
                  <div>
                    <p className={styles.label}>
                      Total de Ingresos Proyectados en Soles
                    </p>
                    <span className={styles.value}>{`S/ 32,872,078`}</span>
                  </div>
                </div>
                <Divider layout="vertical" />
                <div className={styles.totalItem}>
                  <FaDollarSign className={styles.icon} />
                  <div>
                    <p className={styles.label}>
                      Total de Ingresos Proyectados en Dólares
                    </p>
                    <span className={styles.value}>{`$ 2,890,958`}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <br />
        <DataTable
          columns={columns3 || []}
          dataKey="banco"
          data={obligaciones || []}
          isHeaderActive={false}
          onUpdate={() => {}}
          children={
            <div className={styles.totalContainer}>
              <div className={styles.totalBlock}>
                <div className={styles.totalItem}>
                  <FaCoins className={styles.icon} />
                  <div>
                    <p className={styles.label}>Saldo Final en Soles</p>
                    <span className={styles.value}>{`S/ 3,491,144`}</span>
                  </div>
                </div>
                <Divider layout="vertical" />
                <div className={styles.totalItem}>
                  <FaDollarSign className={styles.icon} />
                  <div>
                    <p className={styles.label}>Saldo Final en Dólares</p>
                    <span className={styles.value}>{`$ 1,596,484`}</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <br />
        <div className={styles.btn__content}>
          <CustomButton text="Reporte" backgroundButton="#333" colorP="white" onClick={handleNavigate}/>
        </div>
      </MainContentStructure>
    </>
  );
};

const columns = [
  { nombre: "Banco", campo: "banco" },
  { nombre: "Soles", campo: "soles" },
  { nombre: "Dólares", campo: "dolares" },
];
const banco = [
  { banco: "BCP", soles: "S/.160,001", dolares: "$ 22,414" },
  { banco: "BBVA", soles: "S/.182,030", dolares: "$ 115,328" },
  { banco: "SCOTIABANK", soles: "S/.126,990", dolares: "$ 46,676" },
  { banco: "INTERBANK", soles: "S/.291,708", dolares: "$ 6,540" },
];

const columns2 = [
  { nombre: "Fecha", campo: "fecha" },
  {
    nombre: "Proyección de Ingresos de Ventas en Soles",
    campo: "proyeccionIngresosVentaSoles",
  },
  { nombre: "Depósitos a Plazo en Soles", campo: "depositoPlazoSoles" },
  { nombre: "Depósitos a Plazo en Dólares", campo: "depositoPlazoDolares" },
  { nombre: "Financiamiento en Soles", campo: "financiamientoSoles" },
  { nombre: "Financiamiento en Dólares", campo: "financiamientoDolares" },
  { nombre: "Compra de Dólares", campo: "compraDolares" },
];

const data2 = [
  {
    fecha: "30/11/2024",
    proyeccionIngresosVentaSoles: "32,111,349",
    depositoPlazoSoles: "-",
    depositoPlazoDolares: "-",
    financiamientoSoles: "-",
    financiamientoDolares: "-",
    compraDolares: "$ 2,700,00",
  },
];

const columns3 = [
  { nombre: "Obligaciones", campo: "obligaciones" },
  { nombre: "Soles", campo: "soles" },
  { nombre: "Dólares", campo: "dolares" },
];

const obligaciones = [
  {
    obligaciones: "ALQUILER LOCAL COMERCIAL",
    soles: "S/-1,232,200",
    dolares: "$-45,907",
  },
  {
    obligaciones: "ALQUILERES SEDES DIRECTORES",
    soles: "S/-83,400",
    dolares: "$-13,250",
  },
  { obligaciones: "PLANILLA", soles: "S/-2,161,500", dolares: "" },
  {
    obligaciones: "PROVEEDORES",
    soles: "S/-2,653,162.164",
    dolares: "$-131,053.056",
  },
  { obligaciones: "COMEX", soles: "S/-588,054.258", dolares: "$-719,110.34" },
  { obligaciones: "IMPUESTOS", soles: "S/-2,115,126.056", dolares: "" },
  { obligaciones: "FINANCIAMIENTO", soles: "", dolares: "$-385,154.243" },
  {
    obligaciones: "DIVIDENDOS ACCIONISTAS",
    soles: "S/-3,970,196",
    dolares: "",
  },
  {
    obligaciones: "REGALIAS ACCIONISTAS",
    soles: "S/-6,371,295.872",
    dolares: "",
  },
  { obligaciones: "COMPRA DÓLARES", soles: "", dolares: "" },
  {
    obligaciones: "TOTAL DE OBLIGACIONES",
    soles: "S/29,380,934",
    dolares: "$-1,294,475",
  },
];
