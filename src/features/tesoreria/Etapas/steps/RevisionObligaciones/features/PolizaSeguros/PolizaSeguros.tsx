import React, { useState } from "react";
import style from "./PolizaSeguros.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { AddModal } from "./Modals/AddModal/AddModal";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { Divider } from "primereact/divider";
import { FaDollarSign, FaCoins } from "react-icons/fa";
import { ModalTables } from "./Modals/ModalTable/ModalTable";

export const PolizaSeguros = () => {
  const addModal = useModal();
  const ModalTable = useModal();
  const [selectedSeguro, setSelectedSeguro] = useState<string>("");
  const generateRandomData = (numRows = 10) => {
    const randomNumber = (min, max) =>
      (Math.random() * (max - min) + min).toFixed(2);

    const seguros = ["onco person", "mult", "onco-rosa", "glob"];
    const proveedores = ["Pacífico", "La Positiva", "Mapfre", "Rímac", "Sura"];
    return Array.from({ length: numRows }, () => ({
      seguros: seguros[Math.floor(Math.random() * seguros.length)],
      proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
      soles: parseFloat(randomNumber(0, 10000)),
      dolares: parseFloat(randomNumber(1000, 50000)),
      numCuotas: Math.floor(Math.random() * 12) + 1,
      cuotas: parseFloat(randomNumber(100, 1000)),
      cuotasCanceladas: parseFloat(randomNumber(100, 5000)),
      saldo: parseFloat(randomNumber(500, 10000)),
      numCuotasCanceladas: Math.floor(Math.random() * 12),
    }));
  };

  const generateMontosData = () => [
    { ramos: "3d", monto: 5532.5 },
    { ramos: "Accidente Personales", monto: 729.24 },
    { ramos: "Accidente Personales", monto: 303.85 },
    { ramos: "Multiriesgo", monto: 23292.17 },
    { ramos: "Transporte", monto: 1154.63 },
    { ramos: "Vehículos", monto: 2810.21 },
  ];

  const data = generateRandomData(10);
  const montosData = generateMontosData();

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

  const formatNumber = (number) => {
    return number.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Calcular totales
  const totalSoles = data.reduce((sum, item) => sum + item.soles, 0);
  const totalDolares = data.reduce((sum, item) => sum + item.dolares, 0);
  const totalMontos = montosData.reduce((sum, item) => sum + item.monto, 0);


  const handleEyeClick = (item: any) => {
    setSelectedSeguro(item.seguros); // Establecer el seguro seleccionado
    ModalTable.onVisibleModal(); // Mostrar el modal
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
        onEye={handleEyeClick}
        children={
          <div className={style.totalContainer}>
            <div className={style.totalBlock}>
              <div className={style.totalItem}>
                <FaDollarSign className={style.icon} />
                <div>
                  <p className={style.label}>Total en Dólares</p>
                  <span className={style.value}>{`$ ${formatNumber(
                    totalDolares
                  )}`}</span>
                </div>
              </div>
              <Divider layout="vertical" />
              <div className={style.totalItem}>
                <FaCoins className={style.icon} />
                <div>
                  <p className={style.label}>Total en Soles</p>
                  <span className={style.value}>{`S/ ${formatNumber(
                    totalSoles
                  )}`}</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Divider />

      <DataTable
        columns={[
          { nombre: "Ramos incluidos", campo: "ramos" },
          { nombre: "Montos $", campo: "monto" },
        ]}
        data={montosData}
        isHeaderActive={false}
        children={
          <div className={style.totalContainer}>
            <div className={style.totalBlock}>
              <div className={style.totalItem}>
                <FaDollarSign className={style.icon} />
                <div>
                  <p className={style.label}>Total</p>
                  <span className={style.value}>{`$ ${formatNumber(
                    totalMontos
                  )}`}</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <PrimeModal
        header="Agregar COMEX"
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={700}
      >
        <AddModal postFetchData={true} OnHideModal={addModal.onHideModal} />
      </PrimeModal>

      <PrimeModal
        header=""
        modalStatus={ModalTable.modalStatus}
        onHideModal={ModalTable.onHideModal}
        width={800}
      >
        <ModalTables seguro={selectedSeguro} OnHideModal={addModal.onHideModal} />
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
