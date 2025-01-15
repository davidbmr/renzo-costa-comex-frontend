import React, { useState } from "react";
import styles from "./AddModalProveedores.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { handleChangeInput } from "@/helpers/handleTextBox";
import { CustomButton } from "@/components/CustomButton/CustomButton";

export const AddModalProveedores = () => {
  const [filterOpts, setFilterOpts] = useState<any>({
    cod: "",
    nombre: "",
    ruc: "",
  });

  return (
    <>
      <div className={styles.filter__container}>
        <TextBoxField
          textLabel="Código:"
          name="cod"
          value={filterOpts.cod}
          onChange={(e) => handleChangeInput(e, setFilterOpts)}
          direction="row"
          labelWidth="55px"
          containerWidth="250px"
        />

        <TextBoxField
          textLabel="Nombre:"
          name="nombre"
          value={filterOpts.nombre}
          onChange={(e) => handleChangeInput(e, setFilterOpts)}
          direction="row"
          labelWidth="55px"
          containerWidth="250px"
        />
        <TextBoxField
          textLabel="RUC:"
          name="ruc"
          value={filterOpts.ruc}
          onChange={(e) => handleChangeInput(e, setFilterOpts)}
          direction="row"
          labelWidth="55px"
          containerWidth="250px"
        />
        <CustomButton
          text="Buscar"
          backgroundButton="#9B1139"
          colorP="white"
          onClick={() => ""}
        />
      </div>
      <br />
      <DataTable columns={columns || []} data={data} isHeaderActive={false} />
      <br />
      <CustomButton
        text="Enviar"
        backgroundButton="#9B1139"
        colorP="white"
        onClick={() => ""}
      />
    </>
  );
};

const columns = [
  { nombre: "Cód", campo: "cod" },
  { nombre: "Nombre", campo: "nombre" },
  { nombre: "Saldo de Cuenta", campo: "saldoCuenta" },
  { nombre: "RUC", campo: "ruc" },
];
const data = [
  {
    cod: "P0001",
    nombre: "PROVEEDOR 1",
    saldoCuenta: "0.00",
    ruc: "20999999998",
  },
  {
    cod: "P0002",
    nombre: "PROVEEDOR 2",
    saldoCuenta: "0.00",
    ruc: "20799999997",
  },
  {
    cod: "P0003",
    nombre: "PROVEEDOR 3",
    saldoCuenta: "0.00",
    ruc: "20699999996",
  },
  {
    cod: "P0004",
    nombre: "PROVEEDOR 4",
    saldoCuenta: "0.00",
    ruc: "20599999995",
  },
];
