import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import styles from "./OrdenCompra.module.css";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const OrdenCompra = () => {
	const [data, setData] = useState([]);
	const addModal = useModal();
	const mapping = {
		modelo: "Modelo",
		itemCodigo: "Item código",
		descripcion: "Descripción",
		pedidoDIC: "Pedido DIC",
		precioPEN: "Precio (PEN)",
		estado: "Estado",
		foto: "Foto",
		conFoto: "Con foto",
		conPrecio: "Con precio",
		CostoUSD: "Costo (USD)",
	};

	const generateRandomData = (numItems = 50) => {
		const modelos = ["Modelo A", "Modelo B", "Modelo C", "Modelo D", ""];
		const descripciones = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];
		const estados = ["Nuevo"];
		const fotos = [""];

		return Array.from({ length: numItems }, (_, index) => {
			const pedidoDIC = Math.floor(Math.random() * 100) + 1;
			const conFoto = Math.floor(Math.random() * 100) + 1;
			const conPrecio = Math.floor(Math.random() * 100) + 1;
			const precioUnidad = Math.floor(Math.random() * 90) + 10;

			return {
				modelo: modelos[Math.floor(Math.random() * modelos.length)],
				itemCodigo: `TIC3540${String(index + 1).padStart(3, "0")}`,
				descripcion: descripciones[Math.floor(Math.random() * descripciones.length)],
				pedidoDIC,
				precioPEN: `S/ ${precioUnidad.toFixed(2)}`,
				estado: estados[Math.floor(Math.random() * estados.length)],
				foto: fotos[Math.floor(Math.random() * fotos.length)],
				conFoto,
				conPrecio,
				CostoUSD: fotos[Math.floor(Math.random() * fotos.length)],
			};
		});
	};

	useEffect(() => {
		setData(generateRandomData());
	}, []);

	return (
		<>
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Orden de Compra</h2>
			<div className={styles.btnContainer}>
				<CustomButton text="Crear" backgroundButton="#9B1139" colorP="white" onClick={addModal.onVisibleModal}/>
				<CustomButton text="Importar" />
				<GenerateExcelButton data={data} mapping={mapping} sheetName="OrdenCompra" />
			</div>

			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />

      	{/* Add Modal */}
			<PrimeModal
				header="Agregar Orden de Compra"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
				width={600}
			>
				<AddModal postFetchData={true} />
			</PrimeModal>
		</>
	);
};

const columns = [
	{ nombre: "Modelo", campo: "modelo" },
	{ nombre: "Item código", campo: "itemCodigo" },
	{ nombre: "Descripción", campo: "descripcion" },
	{ nombre: "Pedido DIC", campo: "pedidoDIC" },
	{ nombre: "Precio (PEN)", campo: "precioPEN" },
	{ nombre: "Estado", campo: "estado" },
	{ nombre: "Foto", campo: "foto" },
	{ nombre: "Con foto", campo: "conFoto" },
	{ nombre: "Con precio", campo: "conPrecio" },
	{ nombre: "Costo (USD)", campo: "CostoUSD" },
];
