import React from "react";
import styles from "./CartaFianza.module.css";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { CreateCartaFianza } from "./Create/CreateCartaFianza";
import { useModal } from "@/hooks/useModal";

export const CartaFianza = () => {
  const addModal = useModal();
  return (
    <>
      <div className={styles.comex__container}>
        <h2 style={{ color: "#333", textTransform: "uppercase" }}>
          CARTA DE FIANZA
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
              data={[]}
              mapping={{}}
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

        <DataTable
          columns={columns}
          data={data}
          isHeaderActive={false}
          onEye={() => {}}
        />
      </div>
      <PrimeModal
        header={"Crear Carta Fianza"}
        onHideModal={addModal.onHideModal}
        modalStatus={addModal.modalStatus}
      >
        <CreateCartaFianza />
      </PrimeModal>
    </>
  );
};
const columns = [
  { nombre: "Documento", campo: "document" },
  { nombre: "Beneficiario", campo: "beneficiary" },
  { nombre: "Fecha Vto", campo: "vtoDate" },
  { nombre: "Soles", campo: "soles" },
  { nombre: "Dólares", campo: "dolares" },
  { nombre: "Banco", campo: "banco" },
  { nombre: "Comisión", campo: "comision" },
  { nombre: "Comisión %", campo: "comisionPercent" },
  { nombre: "Com. tr", campo: "" },
  { nombre: "Tienda", campo: "tienda" },
];
const data = [
  {
    document: "DOC001",
    beneficiary: "Beneficiario A",
    vtoDate: "2024-01-01",
    soles: 1000.0,
    dolares: null,
    banco: "Banco de la Nación",
    comision: 10.0,
    comisionPercent: 1.0,
    tienda: "Tienda 1",
  },
  {
    document: "DOC002",
    beneficiary: "Beneficiario B",
    vtoDate: "2024-01-15",
    soles: null,
    dolares: 200.0,
    banco: "BBVA Perú",
    comision: 5.0,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 2",
  },
  {
    document: "DOC003",
    beneficiary: "Beneficiario C",
    vtoDate: "2024-02-01",
    soles: 1500.0,
    dolares: null,
    banco: "Scotiabank Perú",
    comision: 15.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 3",
  },
  {
    document: "DOC004",
    beneficiary: "Beneficiario D",
    vtoDate: "2024-02-15",
    soles: null,
    dolares: 300.0,
    banco: "Interbank",
    comision: 7.5,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 4",
  },
  {
    document: "DOC005",
    beneficiary: "Beneficiario E",
    vtoDate: "2024-03-01",
    soles: 2000.0,
    dolares: null,
    banco: "BCP",
    comision: 20.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 5",
  },
  {
    document: "DOC006",
    beneficiary: "Beneficiario F",
    vtoDate: "2024-03-15",
    soles: null,
    dolares: 400.0,
    banco: "MiBanco",
    comision: 10.0,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 6",
  },
  {
    document: "DOC007",
    beneficiary: "Beneficiario G",
    vtoDate: "2024-04-01",
    soles: 2500.0,
    dolares: null,
    banco: "Banco Pichincha",
    comision: 25.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 7",
  },
  {
    document: "DOC008",
    beneficiary: "Beneficiario H",
    vtoDate: "2024-04-15",
    soles: null,
    dolares: 500.0,
    banco: "BanBif",
    comision: 12.5,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 8",
  },
  {
    document: "DOC009",
    beneficiary: "Beneficiario I",
    vtoDate: "2024-05-01",
    soles: 3000.0,
    dolares: null,
    banco: "Banco GNB",
    comision: 30.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 9",
  },
  {
    document: "DOC010",
    beneficiary: "Beneficiario J",
    vtoDate: "2024-05-15",
    soles: null,
    dolares: 600.0,
    banco: "Banco Falabella",
    comision: 15.0,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 10",
  },
  {
    document: "DOC011",
    beneficiary: "Beneficiario K",
    vtoDate: "2024-06-01",
    soles: 3500.0,
    dolares: null,
    banco: "Banco Ripley",
    comision: 35.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 11",
  },
  {
    document: "DOC012",
    beneficiary: "Beneficiario L",
    vtoDate: "2024-06-15",
    soles: null,
    dolares: 700.0,
    banco: "CitiBank",
    comision: 17.5,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 12",
  },
  {
    document: "DOC013",
    beneficiary: "Beneficiario M",
    vtoDate: "2024-07-01",
    soles: 4000.0,
    dolares: null,
    banco: "HSBC",
    comision: 40.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 13",
  },
  {
    document: "DOC014",
    beneficiary: "Beneficiario N",
    vtoDate: "2024-07-15",
    soles: null,
    dolares: 800.0,
    banco: "Banco Internacional",
    comision: 20.0,
    comisionPercent: 2.5,
    "com. tr": "",
    tienda: "Tienda 14",
  },
  {
    document: "DOC015",
    beneficiary: "Beneficiario O",
    vtoDate: "2024-08-01",
    soles: 4500.0,
    dolares: null,
    banco: "Banco de Comercio",
    comision: 45.0,
    comisionPercent: 1.0,
    "com. tr": "",
    tienda: "Tienda 15",
  },
];
