import React, { useState } from "react";
import styles from "./RegistroFactura.module.css";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { AddModal } from "./AddModal/AddModal";
import { TreeDataTable } from "@/components/TreeDataTable/TreeDataTable";

export const RegistroFactura = () => {
  const [data, setData] = useState([]);
  const addModal = useModal();

  const mapping = {
	name: "Nombre",
	ruc: "RUC",
	deuda: "Deuda",
	type: "Tipo",
	id: "Id Doc.",
	number: "Nro. Doc.",
	serie: "Serie Doc.",
	fechaCont: "echa Cont",
	fechaVen: "Fecha Venc.",
	diasVen: "Dias Venc.",
	moneda: "Moneda",
	tipoCambio: "Tipo de Cambio",
	totalDoc: "Total Doc.",
	saldoVen: "Saldo Venc.",
	retencion: "Retención",
	pagoTotal: "Pago Total",
};

  return (
    <>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>Facturas</h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="var(--primary-color-app)"
          colorP="white"
          onClick={addModal.onVisibleModal}
        />
        <CustomButton text="Importar" />
        <GenerateExcelButton
          data={data}
          mapping={mapping}
          sheetName="Facturas"
        />
      </div>
      <TreeDataTable columns={columns} data={data} isPaginator/>
      <ConfirmacionEtapa />
      {/* Add Modal */}
      <PrimeModal
        header="Agregar Factura"
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={600}
      >
        <AddModal postFetchData={true} />
      </PrimeModal>
    </>
  );
};

const columns = [
  { nombre: "Nombre", campo: "name" },
  { nombre: "RUC", campo: "ruc", size: "150px" },
  { nombre: "Deuda", campo: "deuda", size: "100px" },
  { nombre: "Tipo", campo: "type", size: "70px" },
  { nombre: "Id Doc.", campo: "id", size: "100px" },
  { nombre: "Nro. Doc.", campo: "number", size: "100px" },
  { nombre: "Serie Doc.", campo: "serie", size: "150px" },
  { nombre: "Fecha Cont", campo: "fechaCont", size: "100px" },
  { nombre: "Fecha Venc.", campo: "fechaVen", size: "100px" },
  { nombre: "Dias Venc.", campo: "diasVen", size: "70px" },
  { nombre: "Moneda", campo: "moneda", size: "100px" },
  { nombre: "Tipo de Cambio", campo: "tipoCambio", size: "100px" },
  { nombre: "Total Doc.", campo: "totalDoc", size: "100px" },
  { nombre: "Saldo Venc.", campo: "saldoVen", size: "100px" },
  { nombre: "Retención", campo: "retencion", size: "100px" },
  { nombre: "Pago Total", campo: "pagoTotal", size: "100px" },
];
