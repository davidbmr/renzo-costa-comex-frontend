import React, { useEffect, useState } from "react";
import styles from "./RevisionCuentasPagar.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

export const RevisionCuentasPagar = () => {
  const [data, setData] = useState([]);

  const mapping = {
    numeroDocumento: "Número de Doc.",
    numeroInterno: "Número Interno",
    codigoCliente: "Cód. del Cliente / Proveedor",
    fechaDocumento: "Fecha de Doc.",
    fechaVencimiento: "Fecha de Ven.",
    numeroComprobante: "Número de Comprobante",
    MonedaDocumento: "Moneda del Documento",
    cantidadPlazos: "Cantidad de Plazos",
    grupoDetraccion: "Grupo Detracción",
    nombreGrupoDetraccion: "Nombre Grupo Detracción",
    idPlazo: "ID de Plazo",
    total: "Total",
    total1: "Total",
    estado: "Estado",
    statusDocumento: "Status de Documento",
  };

  const generateRandomData = (numItems = 50) => {
    const proveedores = [
      "Proveedor A",
      "Proveedor B",
      "Proveedor C",
      "Proveedor D",
    ];
    const descripciones = [
      "Producto 1",
      "Producto 2",
      "Producto 3",
      "Producto 4",
    ];
    const estados = ["Tránsito", "Producción"];
    const observaciones = ["Reposición", "Nuevo", "Nuevo/Reposición"];
    const usos = ["Caballero", "Dama", "Dama/Caballero"];
    const docs = ["Doc", ""];
    const pallets = [""];

    return Array.from({ length: numItems }, (_, index) => {
      const cantidad = Math.floor(Math.random() * 100) + 1;
      const precioUnidad = Math.floor(Math.random() * 90) + 10;
      const total = cantidad * precioUnidad;

      return {
        proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
        orden: `IMPO${String(index + 1).padStart(3, "0")}`,
        ingreso: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
        estado: estados[Math.floor(Math.random() * estados.length)],
        descripcion:
          descripciones[Math.floor(Math.random() * descripciones.length)],
        observacion:
          observaciones[Math.floor(Math.random() * observaciones.length)],
        uso: usos[Math.floor(Math.random() * usos.length)],
        cantidad,
        precioUnidad: `US$${precioUnidad.toFixed(2)}`,
        total: `US$${total.toFixed(2)}`,
        eta: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
        doc: docs[Math.floor(Math.random() * docs.length)],
        pallet: pallets[Math.floor(Math.random() * pallets.length)],
      };
    });
  };

  useEffect(() => {
    setData(generateRandomData());
  }, []);

  return (
    <>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Revisión de Cuentas por pagar
      </h2>
      <div className={styles.btnContainer}>
        <div className={styles.btnContent}>
          <CustomButton text="Importar" />
          <GenerateExcelButton
            data={data}
            mapping={mapping}
            sheetName="RevicionCuentasPagar"
          />
        </div>

        <div className={styles.filter__container}>
          <SelectField
          textLabel="Buscar por:"
          name="numeroComprobante"
          options={optionFiltro}
          value={""}
          onChange={() => ""}
          direction="row"
          />
          <TextBoxField
            value={""}
            name="numeroComprobante"
            onChange={() => ""}
            direction="row"
          />
          <CustomButton
            text="Buscar"
            backgroundButton="#9B1139"
            colorP="white"
          />
        </div>
      </div>
      <DataTable columns={columns || []} data={[]} isHeaderActive={false} />
      <ConfirmacionEtapa />
    </>
  );
};

const columns = [
  { nombre: "Número de Doc.", campo: "numeroDocumento" },
  { nombre: "Número Interno", campo: "numeroInterno" },
  { nombre: "Cód. del Cliente / Proveedor", campo: "codigoCliente" },
  { nombre: "Fecha de Doc.", campo: "fechaDocumento" },
  { nombre: "Fecha de Ven.", campo: "fechaVencimiento" },
  { nombre: "Número de Comprobante", campo: "numeroComprobante" },
  { nombre: "Moneda del Documento", campo: "MonedaDocumento" },
  { nombre: "Cantidad de Plazos", campo: "cantidadPlazos" },
  { nombre: "Grupo Detracción", campo: "grupoDetraccion" },
  { nombre: "Nombre Grupo Detracción", campo: "nombreGrupoDetraccion" },
  { nombre: "ID de Plazo", campo: "idPlazo" },
  { nombre: "Total", campo: "total" },
  { nombre: "Total", campo: "total1" },
  { nombre: "Estado", campo: "estado" },
  { nombre: "Status de Documento", campo: "statusDocumento" },
];

const optionFiltro = [
	{ name: "Núm. Comprobante", value: "proveedor1" },
	{ name: "Nombre", value: "proveedor2" },
	{ name: "Cód. Proveedor", value: "proveedor3" },
	{ name: "Fecha", value: "proveedor4" },
];