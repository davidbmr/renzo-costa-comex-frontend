import { CustomButton } from "@/components/CustomButton/CustomButton";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { useModal } from "@/hooks/useModal";
import React, { useEffect, useState } from "react";
import styles from "./Rol.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { useGetFetch } from "@/hooks/useGetFetch";
import axios from "axios";
import { url } from "@/connections/mainApi";
import { usePostFetch } from "@/hooks/usePostFetch";
import { useUpdateFetch } from "@/hooks/useUpdateFetch";

export const Rol = () => {
  const addModal = useModal();
  const [selectedUser, setSelectedUser] = useState(null);

  const FetchRolData = useGetFetch("/role");

  //   const { postFetchData, isLoadingPost } = usePostFetch(
  // 		"/role",
  // 	"Rol",
  //   FetchRolData.reloadFetchData
  // 	);

  //   const { updateFetchData, isLoadingUpdate } = useUpdateFetch(
  //     "/role",
  //     "rol",
  //     FetchRolData.reloadFetchData,

  // );

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
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>Rol</h2>
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
        data={FetchRolData.data || []}
        isHeaderActive={false}
        onUpdate={handleEditSelection}
      />

      {/* Add Modal */}
      <PrimeModal
        header={selectedUser ? "Editar Rol" : "Agregar Rol"}
        modalStatus={addModal.modalStatus}
        onHideModal={addModal.onHideModal}
        width={600}
      >
        <AddModal
          postFetchData={true}
          initialData={selectedUser}
          updateFetchData={true}
          onHideModal={addModal.onHideModal}
        />
      </PrimeModal>
    </MainContentStructure>
  );
};

const columns = [{ nombre: "Nombre", campo: "name" }];
