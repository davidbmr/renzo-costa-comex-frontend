import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useModal } from "@/hooks/useModal";
import React, { useState } from "react";
import styles from "./Users.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const Users = () => {
  const addModal = useModal();
const [selectedUser, setSelectedUser] = useState(null)

const handleEditSelection = (rowData) => {
    setSelectedUser(rowData);
    addModal.onVisibleModal(); 
    console.log("Fila seleccionada:", rowData);
  };
  return (
    <MainContentStructure>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>Usuarios</h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="var(--primary-color-app)"
          colorP="white"
          onClick={addModal.onVisibleModal}
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
        header={selectedUser ? "Editar Usuario" : "Agregar Usuario"}
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
    id:1,
    name: "Ana",
    last_name: "Perez",
    email: "anaperez123@gmail.com",
    role_id: 2,
    phone: "987123456",
    birth_date: "1990-06-25",
  },
  {
    id:2,
    name: "Luis",
    last_name: "Gomez",
    email: "luisgomez77@hotmail.com",
    role_id: 3,
    phone: "986543210",
    birth_date: "1985-12-15",
  },
  {
    id:3,
    name: "María",
    last_name: "Lopez",
    email: "maria.lopez89@yahoo.com",
    role_id: 4,
    phone: "983456789",
    birth_date: "1993-05-10",
  },
  {
    id:4,
    name: "Carlos",
    last_name: "Fernandez",
    email: "carlos_fernandez@gmail.com",
    role_id: 1,
    phone: "982345678",
    birth_date: "2000-08-21",
  },
];

const columns = [
  { nombre: "Nombre", campo: "name" },
  { nombre: "Apellido", campo: "last_name" },
  { nombre: "Correo", campo: "email" },
  { nombre: "Rol", campo: "role_id" },
  { nombre: "Celular", campo: "phone" },
  { nombre: "Fecha de nacimiento", campo: "birth_date" },
];
