import React, { useState, useEffect } from "react";
import styles from "./SaldosBancarios.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { useNavigate} from "react-router-dom";
import { InputText } from "primereact/inputtext";

export const SaldosBanacarios = () => {
  const navigate = useNavigate();
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

  const generateRandomData = (numItems = 50) => {
    return Array.from({ length: numItems }, (_, index) => {
      const estados = ["En Proceso", "Finalizado"];
      const cantidad = Math.floor(Math.random() * 100) + 1;
      const gasto = Math.floor(Math.random() * 1000) + 1;
      const gastoD = Math.floor(Math.random() * 100) + 1;
      const precioUnidad = Math.floor(Math.random() * 1000) + 10;
      const total = cantidad * precioUnidad;
      const saldoFinalSoles = total - gasto;
      const saldoFinalDolares = precioUnidad - gastoD;

      return {
        id: Math.floor(Math.random() * 100) + 1,
        ingresosProyectadosSoles: `S/${total.toFixed(2)}`,
        ingresosProyectadosDolares: `US$${precioUnidad.toFixed(2)}`,
        obligacionesSoles: `S/ -${gasto.toFixed(2)}`,
        obligacionesDolares: `US$ -${gastoD.toFixed(2)}`,
        totalObligacionesSoles: `S/ -${gasto.toFixed(2)}`,
        totalObligacionesDolares: `US$ -${gastoD.toFixed(2)}`,
        fecha: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
        cantidad,
        total: `US$${total.toFixed(2)}`,
        estado: estados[Math.floor(Math.random() * estados.length)],
        saldoFinalSoles: `S/.${saldoFinalSoles.toFixed(2)}`,
        saldoFinalDolares: `US$${saldoFinalDolares.toFixed(2)}`,
      };
    });
  };

  useEffect(() => {
    setData(generateRandomData());
  }, []);


  return (
    <>
      <MainContentStructure>
        <h2 style={{ color: "#333", textTransform: "uppercase" }}>Saldos Bancarios</h2>
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

          <div className="flex justify-content-end">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText type="search" placeholder="Buscar..." />
            </span>
          </div>
        </div>

        <DataTable
          columns={columns || []}
          data={data || []}
          isHeaderActive={false}
          onEye={() => navigate("/gestion-financiera")}
          onUpdate={() => {}}
        />
      </MainContentStructure>
    </>
  );
};

const columns = [
  { nombre: "Fecha de Cierre", campo: "fecha" },
  { nombre: "Ingresos Proyectados en Soles", campo: "ingresosProyectadosSoles" },
  { nombre: "Ingresos Proyectados en Dólares", campo: "ingresosProyectadosDolares" },
  { nombre: "Obligaciones en Soles", campo: "obligacionesSoles" },
  { nombre: "Obligaciones en Dólares", campo: "obligacionesDolares" },
  { nombre: "Total de Obligaciones en Soles", campo: "totalObligacionesSoles" },
  { nombre: "Total de Obligaciones en Dólares", campo: "totalObligacionesDolares" },
  { nombre: "Saldo Final Soles", campo: "saldoFinalSoles" },
  { nombre: "Saldo Final Dólares", campo: "saldoFinalDolares" },
  { nombre: "Estado", campo: "estado" },
];
