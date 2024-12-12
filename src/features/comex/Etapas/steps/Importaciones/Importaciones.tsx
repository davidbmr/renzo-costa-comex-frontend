import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import styles from "./Importaciones.module.css";

export const Importaciones = () => {
  const [data, setData] = useState([]);

  const mapping = {
	proveedor:"Proveedor", 
	orden: "Orden",
	ingreso: "Ingreso",
	estado: "Estado",
	descripcion: "Descripción",
	observacion: "Observación",
	uso:"Uso",
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
	  };
	});
  };

  useEffect(() => {
	setData(generateRandomData());
  }, []);

  return (
    <>
	<h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Importaciones
      </h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="#9B1139"
          colorP="white"
        />
        <CustomButton text="Importar" />
        <GenerateExcelButton
          data={data}
          mapping={mapping}
          sheetName="Pedidos"
        />
      </div>
      <DataTable
        columns={columns || []}
        data={data || []}
        isHeaderActive={false}
      />
      <ConfirmacionEtapa />
    </>
  );
};

const columns = [
  { nombre: "Proveedor", campo: "proveedor" },
  { nombre: "Orden", campo: "orden" },
  { nombre: "Ingreso", campo: "ingreso" },
  { nombre: "Estado", campo: "estado",},
  { nombre: "Descripción", campo: "descripcion" },
  { nombre: "Observación", campo: "observacion" },
  { nombre: "Uso", campo: "uso" },
];
