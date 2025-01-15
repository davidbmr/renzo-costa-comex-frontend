import React, { useState } from "react";
import style from "./AddModal.module.css";
import { Button } from "primereact/button";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModalProveedores } from "@/components/modals/AddModalProveedores/AddModalProveedores";
import { AddModalFactura } from "../AddModalFactura/AddModalFactura";

interface PropsAddModal {
  postFetchData?: any;
}

export const AddModal = ({ postFetchData }: PropsAddModal) => {
  const addModal = useModal();
  const addModalFactura = useModal();
  const [newData, setNewData] = useState<any>({
    fechaIni: "",
    fechaFin: "",
  });

  const handleCreate = async () => {
    const formData = new FormData();
    Object.entries(newData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      }
    });

    postFetchData(formData);
  };

  return (
    <>
      <CustomButton
        text="Agregar"
        backgroundButton="#9B1139"
        colorP="white"
        onClick={addModal.onVisibleModal}
      />
      <br />
      <DataTable columns={columns || []} data={[]} isHeaderActive={false} />

      {postFetchData && (
        <div>
          <Button
            className="p-button-sm p-button-info mr-2"
            onClick={addModalFactura.onVisibleModal}
          >
            Siguiente
          </Button>
        </div>
      )}
      {/* Add Modal */}
      <PrimeModal
        header="Proveedores"
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={700}
      >
        <AddModalProveedores />
      </PrimeModal>
      {/* Add Modal */}
      <PrimeModal
        header="Facturas"
        modalStatus={addModalFactura.modalStatus}
        onHideModal={addModalFactura.onHideModal}
        width={1400}
      >
        <AddModalFactura />
      </PrimeModal>
    </>
  );
};

const columns = [
  { nombre: "Cód", campo: "cod" },
  { nombre: "Nombre", campo: "nombre" },
  { nombre: "Saldo de Cuenta", campo: "saldoCuenta" },
  { nombre: "RUC", campo: "ruc" },
];
