import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
import styles from "./Products.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const Products = () => {
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
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>Productos</h2>
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
        data={data || []}
        isHeaderActive={false}
        onUpdate={handleEditSelection}
   
      />

      {/* Add Modal */}
      <PrimeModal
        header={selectedUser ? "Editar Producto" : "Agregar Producto"}
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={600}
      >
         <AddModal postFetchData={true} initialData={selectedUser} />
      </PrimeModal>
    </MainContentStructure>
  );
};

const data = [
  {
    "model_id": 1,
    "gender": "FEMALE",
    "description": "tomatodo",
    "model": "Renzo Costa Cartera Elegance 2023"
  },
  {
    "model_id": 2,
    "gender": "FEMALE",
    "description": "clásica",
    "model": "Renzo Costa Cartera Classic 2023"
  },
  {
    "model_id": 3,
    "gender": "MALE",
    "description": "moderna",
    "model": "Renzo Costa Cartera Urban 2023"
  },
  {
    "model_id": 2,
    "gender": "FEMALE",
    "description": "elegante",
    "model": "Renzo Costa Cartera Luxe 2023"
  },
  {
    "model_id": 3,
    "gender": "UNISEX",
    "description": "minimalista",
    "model": "Renzo Costa Cartera Minimal 2023"
  }
]

const columns = [
  { nombre: "Genero", campo: "gender" },
  { nombre: "Modelo", campo: "model" },
  { nombre: "Descripción", campo: "description" },

];
