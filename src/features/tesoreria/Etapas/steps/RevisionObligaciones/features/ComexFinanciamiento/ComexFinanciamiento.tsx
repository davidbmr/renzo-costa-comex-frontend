import React from "react";
import style from "./ComexFinanciamiento.module.css";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";

export const ComexFinanciamiento = () => {
  const navigate = useNavigate();

  // Generar datos aleatorios
  const generateRandomData = (numRows = 10) => {
    const randomDate = (start, end) =>
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
        .toISOString()
        .split("T")[0];

    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const estados = ["Activo", "Pendiente", "Cancelado", "Vencido"];
    const bancos = [
      "Banco Santander",
      "BBVA",
      "Banco Nación",
      "HSBC",
      "Citibank",
    ];
    const proveedores = [
      "Proveedor ABC",
      "Proveedor XYZ",
      "Proveedor 123",
      "Proveedor LMN",
    ];

    return Array.from({ length: numRows }, () => ({
      banco: bancos[Math.floor(Math.random() * bancos.length)],
      numero: String(randomNumber(10000, 99999)),
      proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
      fecha: randomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      valido: randomDate(new Date(2025, 0, 1), new Date(2030, 0, 1)),
      diasEmbarque: randomNumber(10, 60),
      dolar: randomNumber(1000, 10000),
      euro: randomNumber(900, 9000),
      montoUSD: randomNumber(5000, 50000),
      saldo: randomNumber(1000, 30000),
      estado: estados[Math.floor(Math.random() * estados.length)],
      primeraFechaVto: randomDate(new Date(2024, 0, 1), new Date(2025, 0, 1)),
      primerMontoVto: randomNumber(1000, 10000),
      segundaFechaVto: randomDate(new Date(2025, 0, 1), new Date(2026, 0, 1)),
      segundoMontoVto: randomNumber(1000, 10000),
      comisionEmision: randomNumber(10, 100),
      comisionLiqGastos: randomNumber(10, 100),
      comisionCancelacion: randomNumber(10, 100),
      comisionTotal: randomNumber(50, 300),
    }));
  };

  const data = generateRandomData(10);

  const mapping = {
    banco: "banco",
    numero: "numero",
    proveedor: "proveedor",
    fecha: "fecha",
    valido: "valido",
    diasEmbarque: "diasEmbarque",
    dolar: "dolar",
    saldo: "saldo",
    euro: "euro",
    montoUSD: "montoUSD",
    estado: "estado",
    primeraFechaVto: "primeraFechaVto",
    primerMontoVto: "primerMontoVto",
    segundaFechaVto: "segundaFechaVto",
    segundoMontoVto: "segundoMontoVto",
    comisionEmision: "comisionEmision",
    comisionLiqGastos: "comisionLiqGastos",
    comisionCancelacion: "comisionCancelacion",
    comisionTotal: "comisionTotal",
  };

  return (
    <>
      <div className={style.comex__container}>
        <h2 style={{ color: "#333", textTransform: "uppercase" }}>
          Comex y financiamiento
        </h2>

        <div className={style.btnContainer}>
          <div className={style.btnContent}>
            <CustomButton
              text="CREAR"
              backgroundButton="var(--primary-color-app)"
              colorP="white"
            />
            <CustomButton text="IMPORTAR" />
            <GenerateExcelButton
              data={data}
              mapping={mapping}
              sheetName="SaldosIniciales"
            />
          </div>

          <div className="flex justify-content-end">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText type="search" placeholder="Buscar..." />
            </span>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={data}
          isHeaderActive={false}
          onEye={() => navigate("/tesoreria/etapas-tesoreria")}
          onUpdate={() => {}}
        />
      </div>
    </>
  );
};

// Definición de columnas con campos corregidos
const columns = [
  { nombre: "Banco", campo: "banco" },
  { nombre: "Número", campo: "numero" },
  { nombre: "Nombre Proveedor", campo: "proveedor" },
  { nombre: "Fecha Emisión", campo: "fecha" },
  { nombre: "Válido Hasta", campo: "valido" },
  { nombre: "Días de Embarque", campo: "diasEmbarque" },
  { nombre: "Dólar", campo: "dolar" },
  { nombre: "Euro", campo: "euro" },
  { nombre: "Monto a USD", campo: "montoUSD" },
  { nombre: "Saldo", campo: "saldo" },
  { nombre: "Estado", campo: "estado" },
  { nombre: "1era Fecha vto", campo: "primeraFechaVto" },
  { nombre: "1er Monto Vto $", campo: "primerMontoVto" },
  { nombre: "2da Fecha vto", campo: "segundaFechaVto" },
  { nombre: "2do Monto Vto $", campo: "segundoMontoVto" },
  { nombre: "Comisión emisión", campo: "comisionEmision" },
  { nombre: "Comisión Liq. de Gastos", campo: "comisionLiqGastos" },
  { nombre: "Comisión cancelación", campo: "comisionCancelacion" },
  { nombre: "Comisión Total $", campo: "comisionTotal" },
];
