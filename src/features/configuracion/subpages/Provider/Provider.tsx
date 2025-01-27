import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
import styles from "./Provider.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const Provider = () => {
  const addModal = useModal();
const [selectedUser, setSelectedUser] = useState(null)

const handleEditSelection = (rowData) => {
    setSelectedUser(rowData);
    addModal.onVisibleModal(); 
    console.log("Fila seleccionada:", rowData);
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    addModal.onVisibleModal();
  };
  
  return (
    <MainContentStructure>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>Proveedores</h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="var(--primary-color-app)"
          colorP="white"
          onClick={handleAddUser}
        />
        <CustomButton text="Importar" />
        {/* <GenerateExcelButton data={data} mapping={mapping} sheetName="Pedidos" /> */}
      </div>
      <DataTable
        columns={columns || []}
        data={companies || []}
        isHeaderActive={false}
        onUpdate={handleEditSelection}
   
      />

      {/* Add Modal */}
      <PrimeModal
        header={selectedUser ? "Editar Proveedor" : "Agregar Proveedor"}
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={600}
      >
         <AddModal postFetchData={true} initialData={selectedUser} />
      </PrimeModal>
    </MainContentStructure>
  );
};

const companies = [
  {
    code: "001",
    company_name: "Tech Solutions Inc.",
    phone: "+18005551234",
    currency: "USD",
    exchange_rate: 1.0
  },
  {
    code: "002",
    company_name: "Global Innovations Ltd.",
    phone: "442079460958",
    currency: "GBP",
    exchange_rate: 0.75
  },
  {
    code: "003",
    company_name: "EuroTech SAS",
    phone: "33123466789",
    currency: "EUR",
    exchange_rate: 0.85
  },
  {
    code: "004",
    company_name: "Asia Pacific Corp.",
    phone: "81312345678",
    currency: "JPY",
    exchange_rate: 110.0
  },
  {
    code: "005",
    company_name: "Latin America Enterprises",
    phone: "525512345678",
    currency: "MXN",
    exchange_rate: 20.0
  }
];

const columns = [
  { nombre: "Codigo", campo: "code" },
  { nombre: "Nombre Empresa", campo: "company_name" },
  { nombre: "Teléfono", campo: "phone" },
  { nombre: "Moneda", campo: "currency" },
  { nombre: "Tipo de Cambio", campo: "exchange_rate" },
];
