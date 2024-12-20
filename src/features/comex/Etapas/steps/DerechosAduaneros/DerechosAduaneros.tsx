import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import styles from "./DerechosAduaneros.module.css";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";

export const DerechosAduaneros = () => {
	const [data, setData] = useState([]);
		const addModal = useModal();

	const generateRandomData = (numItems = 50) => {
		const proveedores = ["Proveedor A", "Proveedor B", "Proveedor C", "Proveedor D"];
		const estados = ["Abonado"];

		return Array.from({ length: numItems }, (_, index) => {
			const numDUA = Math.floor(Math.random() * 100) + 1;
			const precioUnidad = Math.floor(Math.random() * 90) + 10;

			return {
				orden: `FOR${String(index + 1).padStart(3, "0")}`,
				proveedor: proveedores[Math.floor(Math.random() * proveedores.length)],
				montoUSD: `US$${precioUnidad.toFixed(2)}`,
				fechaNum: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				fechaPago: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				estado: estados[Math.floor(Math.random() * estados.length)],
				numDUA,

			};
		});
	};

	useEffect(() => {
		setData(generateRandomData());
	}, []);


	return (
		<>
		<h2 style={{ color: "#333", textTransform: "uppercase" }}>Derechos Aduaneros</h2>
			<div className={styles.btnContainer}>
				<CustomButton
					text="Crear"
					backgroundButton="#9B1139"
					colorP="white"
					onClick={addModal.onVisibleModal}
				/>
				<CustomButton text="Importar" />
				{/* <GenerateExcelButton data={data} mapping={mapping} sheetName="Pedidos" /> */}
			</div>
			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />

			{/* Add Modal */}
						<PrimeModal
							header="Agregar Derechos Aduaneros"
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
	{ nombre: "Orden", campo: "orden" },
	{ nombre: "Proveedor", campo: "proveedor" },
	{ nombre: "Monto USD", campo: "montoUSD" },
	{ nombre: "Fecha de numeración", campo: "fechaNum" },
	{ nombre: "Número de DUA", campo: "numDUA" },
	{ nombre: "Fecha de Pago", campo: "fechaPago" },
	{ nombre: "Estado", campo: "estado" },
];
