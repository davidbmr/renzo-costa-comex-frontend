import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./Comex.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "../AddModal/AddModal";

export const Comex = () => {
	const navigate = useNavigate();
	const addModal = useModal();
	// const [showForm, setShowForm] = useState(false);
	const [data, setData] = useState([]);

	const mapping = {
		proveedor: "Proveedor",
		orden: "Orden",
		ingreso: "Ingreso",
		estado: "Estado",
		descripcion: "Descripción",
		observacion: "Observación",
		uso: "Uso",
	};

	const generateRandomData = (numItems = 50) => {
		const proveedores = ["Proveedor A", "Proveedor B", "Proveedor C", "Proveedor D"];
		const descripciones = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];
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
				ingreso: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				estado: estados[Math.floor(Math.random() * estados.length)],
				descripcion: descripciones[Math.floor(Math.random() * descripciones.length)],
				observacion: observaciones[Math.floor(Math.random() * observaciones.length)],
				uso: usos[Math.floor(Math.random() * usos.length)],
				cantidad,
				precioUnidad: `US$${precioUnidad.toFixed(2)}`,
				total: `US$${total.toFixed(2)}`,
				eta: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
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
			<MainContentStructure>
				<h2 style={{ color: "#333", textTransform: "uppercase" }}>Comercio exterior</h2>
				<div className={styles.btnContainer}>
					<CustomButton
						text="Crear"
						backgroundButton="#9B1139"
						colorP="white"
						onClick={addModal.onVisibleModal}
					/>
					<CustomButton text="Importar" />
					<GenerateExcelButton data={data} mapping={mapping} sheetName="Pedidos" />
				</div>


				<DataTable
					columns={columns || []}
					data={data || []}
					isHeaderActive={false}
					onEye={() => navigate("/comex/etapas-comercio-exterior")}
				/>
			</MainContentStructure>
			{/* Add Modal */}
			<PrimeModal
				header="Agregar COMEX"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
				width={600}
			>
				<AddModal postFetchData={true} />
			</PrimeModal>
		</>
	);
};

const estadoBodyTemplate = (item) => {
	const estadoClass =
		item.estado === "Producción"
			? styles.tagSuccess
			: item.estado === "Tránsito"
			? styles.tagInfo
			: item.estado === "Pendiente"
			? styles.tagWarning
			: styles.tagDanger;

	return <span className={`${styles.tag} ${estadoClass}`}>{item.estado}</span>;
};

const columns = [
	{ nombre: "Proveedor", campo: "proveedor" },
	{ nombre: "Orden", campo: "orden" },
	{ nombre: "Ingreso", campo: "ingreso" },
	{
		nombre: "Estado",
		body: estadoBodyTemplate,
	},
	{ nombre: "Descripción", campo: "descripcion" },
	{ nombre: "Observación", campo: "observacion" },
	{ nombre: "Uso", campo: "uso" },
	{ nombre: "Total", campo: "cantidad" },
	{ nombre: "Cajas", campo: "cantidad" },
	{ nombre: "Kilos", campo: "cantidad" },
	// { nombre: "M3", campo: "cantidad" },
	// { nombre: "Eta", campo: "eta" },
	// { nombre: "Doc", campo: "doc" },
	// { nombre: "Pallets", campo: "pallet" },
];
