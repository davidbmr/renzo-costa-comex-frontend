import React from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import styles from "./TarjetasDeCredito.module.css";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { useModal } from "@/hooks/useModal";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";

export const TarjetasDeCredito = () => {
  const addModal = useModal();
  const data = [
    {
      nombre: "Jose Cabanillas",
      tarjeta: "4557 8901 1008 8427",
      banco: "BCP",
      soles: 25000,
      dolar: "-",
      ciclo: "26xx al 25xx",
      pago: "15xx",
    },
    {
      nombre: "Alwin Rojas",
      tarjeta: "4557 8901 1007 0532",
      banco: "BCP",
      soles: 30000,
      dolar: "-",
      ciclo: "26xx al 25xx",
      pago: "15xx",
    },
    {
      nombre: "Cristian Nole",
      tarjeta: "4557 8901 1007 1563",
      banco: "BCP",
      soles: 11000,
      dolar: "-",
      ciclo: "26xx al 25xx",
      pago: "15xx",
    },
    {
      nombre: "Marina Bustamante",
      tarjeta: "4320 8210 0648",
      banco: "SCOT",
      soles: 10000,
      dolar: "-",
      ciclo: "07xx al 06xx",
      pago: "24xx",
    },
    {
      nombre: "Renzo Costa",
      tarjeta: "4320 8210 0911 9960",
      banco: "SCOT",
      soles: 10000,
      dolar: "-",
      ciclo: "07xx al 06xx",
      pago: "24xx",
    },
    {
      nombre: "Adriana Brenneisen",
      tarjeta: "4320 8210 0011 5174",
      banco: "SCOT",
      soles: 10000,
      dolar: "-",
      ciclo: "07xx al 06xx",
      pago: "24xx",
    },
  ];

  const columns = [
    { nombre: "Nombre", campo: "nombre" },
    { nombre: "Nº Tarjeta", campo: "tarjeta" },
    { nombre: "Banco", campo: "banco" },
    { nombre: "Soles", campo: "soles" },
    { nombre: "Dólar", campo: "dolar" },
    { nombre: "Ciclo", campo: "ciclo" },
    { nombre: "Pago", campo: "pago" },
  ];

  const mapping = {
    nombre: "nombre",
    tarjeta: "tarjeta",
    soles: "soles",
    banco: "banco",
    dolar: "dolar",
    ciclo: "ciclo",
    pago: "pago",
  };
  return (
    <div className={styles.container}>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Tarjetas de Crédito
      </h2>

      <div className={styles.btnContainer}>
        <div className={styles.btnContent}>
          <CustomButton
            text="CREAR"
            backgroundButton="var(--primary-color-app)"
            colorP="white"
            onClick={() => addModal.onVisibleModal()}
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
      <DataTable columns={columns} data={data} isHeaderActive={false} />

      <PrimeModal
        header=""
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={700}
      >
        <AddModal postFetchData={true} OnHideModal={addModal.onHideModal} />
      </PrimeModal>
    </div>
  );
};
