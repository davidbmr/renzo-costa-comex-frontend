import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import styles from "./PrecioEntrega.module.css";

export const PrecioEntrega = () => {
	const [data, setData] = useState([]);

	const generateRandomData = (numItems = 50) => {
		const tipos = [
		  "Terceros",
		  "",
		];
		const conceptos = [
		  "Handling",
		  "Servicio de Terminal",
		  "Comisión",
		  "",
		];
	
		return Array.from({ length: numItems }, (_, index) => {
		  const cantidad = Math.floor(Math.random() * 100) + 1;
		  const precioUnidad = Math.floor(Math.random() * 90) + 10;
		  const total = cantidad * precioUnidad;
	
		  return {
			tipo: tipos[Math.floor(Math.random() * tipos.length)],
			orden: `235-2024-${String(index + 1).padStart(3, "0")}`,
			concepto:conceptos[Math.floor(Math.random() * conceptos.length)],
			fecha: new Date(
			  Date.now() - Math.floor(Math.random() * 1e10)
			).toLocaleDateString(),
			pago: `34446-${String(index + 1).padStart(3, "0")}`,
			montoPEN:`S/${String(index + 1).padStart(3, "0")}`,
			montoUSD: `US$${precioUnidad.toFixed(2)}`,
			referenciaCliente: `IMPO${String(index + 1).padStart(3, "0")}`,
		  };
		});
	  };
	
	  useEffect(() => {
		setData(generateRandomData());
	  }, []);

	return (
		<>
		<h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Precosteo
      </h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="#9B1139"
          colorP="white"
        />
        <CustomButton text="Importar" />
        {/* <GenerateExcelButton
          data={data}
          mapping={mapping}
          sheetName="Pedidos"
        /> */}
      </div>
			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />
		</>
	);
};

const columns = [
	{ nombre: "Tipo", campo: "tipo" },
	{ nombre: "Orden", campo: "orden" },
	{ nombre: "Concepto", campo: "concepto" },
	{ nombre: "Fecha", campo: "fecha" },
	{ nombre: "Pago", campo: "pago" },
	{ nombre: "Monto PEN", campo: "montoPEN" },
	{ nombre: "Monto USD", campo: "montoUSD" },
	{ nombre: "Referencia Cliente", campo: "referenciaCliente" },
];
