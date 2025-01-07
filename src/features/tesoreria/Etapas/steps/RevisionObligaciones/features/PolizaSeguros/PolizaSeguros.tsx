import React from "react";
import style from "./PolizaSeguros.module.css";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { AddModal } from "./Modals/AddModal/AddModal";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { Divider } from "primereact/divider";

export const PolizaSeguros = () => {
  const addModal = useModal();
  const generateRandomData = (numRows = 10) => {
    const randomNumber = (min, max) =>
      (Math.random() * (max - min) + min).toFixed(2);

    const seguros = ["onco person", "mult", "onco-rosa", "glob"];
    const proveedores = ["Pacífico", "La Positiva", "Mapfre", "Rímac", "Sura"];
    return Array.from({ length: numRows }, () => ({
      seguros: seguros[Math.floor(Math.random() * seguros.length)],
      proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
      soles: `S/ ${randomNumber(0, 10000)}`,
      dolares: `$ ${randomNumber(1000, 50000)}`,
      numCuotas: Math.floor(Math.random() * 12) + 1,
      cuotas: `S/ ${randomNumber(100, 1000)}`,
      cuotasCanceladas: `S/ ${randomNumber(100, 5000)}`,
      saldo: `$ ${randomNumber(500, 10000)}`,
      numCuotasCanceladas: Math.floor(Math.random() * 12),
    }));
  };

  const data = generateRandomData(10);

  const mapping = {
    seguros: "seguros",
    proveedor: "proveedor",
    soles: "soles",
    dolares: "dolares",
    numCuotas: "numCuotas",
    cuotas: "cuotas",
    cuotasCanceladas: "cuotasCanceladas",
    saldo: "saldo",
    numCuotasCanceladas: "numCuotasCanceladas",
  };

  return (
    <div className={style.poliza__container}>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        programación de pagos de pólizas
      </h2>

      <div className={style.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="#9B1139"
          colorP="white"
          onClick={() => addModal.onVisibleModal()}
        />
        <CustomButton text="Importar" />
        <GenerateExcelButton
          data={data}
          mapping={mapping}
          sheetName="Proveedores"
        />
      </div>
      <DataTable
        columns={columns}
        data={data}
        isHeaderActive={false}
        onEye={() => console.log("ds")}
      

      />

      <Divider/>

      <PrimeModal
        header="Agregar COMEX"
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={600}
      >
        <AddModal postFetchData={true} OnHideModal={addModal.onHideModal} />
      </PrimeModal>
    </div>
  );
};

// Definición de columnas basadas en la tabla de la imagen
const columns = [
  { nombre: "Seguro", campo: "seguros" },
  { nombre: "Proveedor", campo: "proveedor" },
  { nombre: "Soles", campo: "soles" },
  { nombre: "Dólares", campo: "dolares" },
  { nombre: "Nº Cuotas", campo: "numCuotas" },
  { nombre: "Cuotas", campo: "cuotas" },
  { nombre: "Cuotas canceladas", campo: "cuotasCanceladas" },
  { nombre: "Saldo", campo: "saldo" },
  { nombre: "Nº Cuotas Canceladas", campo: "numCuotasCanceladas" },
];
