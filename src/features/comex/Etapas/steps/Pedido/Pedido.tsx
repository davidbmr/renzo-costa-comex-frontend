import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import styles from "./Pedido.module.css";

export const Pedido = () => {
	const [data, setData] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const generateRandomData = (numItems = 50) => {
		const proveedores = ["Proveedor A", "Proveedor B", "Proveedor C", "Proveedor D"];
		const requerimientos = ["21 oct"];
		const estados = ["Tránsito", "Producción"];
		const observaciones = ["Reposición", "Nuevo", "Nuevo/Reposición"];
		const familias = ["Correa", "Cartera"];
		const usos = ["Dama", "Caballero"];
		const pallets = [""];

		return Array.from({ length: numItems }, (_, index) => {
			const cantidad = Math.floor(Math.random() * 100) + 1;
			const precioUnidad = Math.floor(Math.random() * 90) + 10;
			const total = cantidad * precioUnidad;

			return {
				proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
				requerimiento: requerimientos,
				esperada: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				ingresoFinal: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				orden: `IMPO${String(index + 1).padStart(3, "0")}`,
				familia: familias[Math.floor(Math.random() * familias.length)],
				estado: estados[Math.floor(Math.random() * estados.length)],
				observacion: observaciones[Math.floor(Math.random() * observaciones.length)],
				cantidad,
				precioUnidad: `US$${precioUnidad.toFixed(2)}`,
				total: `US$${total.toFixed(2)}`,
				uso: usos[Math.floor(Math.random() * usos.length)],
				codigo: `TID11${String(index + 1).padStart(3, "0")}`,
			};
		});
	};

	useEffect(() => {
		setData(generateRandomData());
	}, []);

	return (
		<>
		<h2 style={{ color: "#333", textTransform: "uppercase" }}>Comercio exterior</h2>
			<div className={styles.btnContainer}>
				<CustomButton
					text="Crear"
					backgroundButton="#9B1139"
					colorP="white"
					onClick={() => setShowForm(true)}
				/>
				<CustomButton text="Importar" />
				{/* <GenerateExcelButton data={data} mapping={mapping} sheetName="Pedidos" /> */}
			</div>

			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />
		</>
	);
};

const columns = [
	{ nombre: "Proveedor", campo: "proveedor" },
	{ nombre: "Requerimiento", campo: "requerimiento" },
	{ nombre: "Esperada", campo: "esperada" },
	{ nombre: "Ingreso final", campo: "ingresoFinal" },
	{ nombre: "Mes", campo: "mes" },
	{ nombre: "Mes 1", campo: "mes1" },
	{ nombre: "Año", campo: "anio" },
	{ nombre: "Orden", campo: "orden" },
	{ nombre: "Familia", campo: "familia" },
	{ nombre: "Observación", campo: "observacion" },
	{ nombre: "Uso", campo: "uso" },
	{ nombre: "Código", campo: "codigo" },
];