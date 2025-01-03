import React, { useState, useEffect } from "react";
import styles from "./Tesoreria.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { InputText } from "primereact/inputtext";
import { AddModal } from "../AddModal/AddModal";

export const Tesoreria = () => {
  const navigate = useNavigate();
  const addModal = useModal();
  const [data, setData] = useState([]);

  const mapping = {
    fecha: "Fecha",
    saldoInicialSoles: "Saldo Inicial Soles",
    saldoInicialDolares: "Saldo Inicial Dólares",
    gastosSoles: "Gastos Soles",
    gastosDolares: "Gastos Dólares",
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
        saldoInicialSoles: `S/.${total.toFixed(2)}`,
        saldoInicialDolares: `US$${precioUnidad.toFixed(2)}`,
        gastosSoles: `S/.${gasto.toFixed(2)}`,
        gastosDolares: `US$${gastoD.toFixed(2)}`,
        fecha: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
        cantidad,
        total: `US$${total.toFixed(2)}`,
        eta: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
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
        <h2 style={{ color: "#333", textTransform: "uppercase" }}>Tesorería</h2>
        <div className={styles.btnContainer}>
          <div className={styles.btnContent}>
            <CustomButton
              text="Crear"
              backgroundButton="#9B1139"
              colorP="white"
              onClick={addModal.onVisibleModal}
            />
            {/* <CustomButton text="Importar" /> */}
            <GenerateExcelButton
              data={data}
              mapping={mapping}
              sheetName="Tesoreria"
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
          onEye={() => navigate("/tesoreria/etapas-tesoreria")}
          onUpdate={() => {}}
        />
      </MainContentStructure>
      {/* Add Modal */}
      <PrimeModal
        header="Apertura de Saldos Bancarios Diarios"
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={500}
      >
        <AddModal postFetchData={true} />
      </PrimeModal>
    </>
  );
};

const columns = [
  { nombre: "Fecha", campo: "fecha" },
  { nombre: "Saldo Inicial Soles", campo: "saldoInicialSoles" },
  { nombre: "Saldo Inicial Dólares", campo: "saldoInicialDolares" },
  { nombre: "Gastos Soles", campo: "gastosSoles" },
  { nombre: "Gastos Dólares", campo: "gastosDolares" },
  { nombre: "Saldo Final Soles", campo: "saldoFinalSoles" },
  { nombre: "Saldo Final Dólares", campo: "saldoFinalDolares" },
  { nombre: "Estado", campo: "estado" },
];
