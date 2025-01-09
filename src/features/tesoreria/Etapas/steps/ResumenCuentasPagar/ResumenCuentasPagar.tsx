import React, { useEffect, useState } from "react";
import styles from "./ResumenCuentasPagar.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

export const ResumenCuentasPagar = () => {
	const [data, setData] = useState([]);

	const mapping = {
		codigoCliente: "Cód. del Cliente / Proveedor",
		fechaVencimiento: "Fecha de Ven.",
		soles: "Soles",
		dolares: "Dólares",
	};

	const generateRandomData = (numItems = 50) => {
		const proveedores = ["Proveedor A", "Proveedor B", "Proveedor C", "Proveedor D"];

		return Array.from({ length: numItems }, (_, index) => {
			const cantidad = Math.floor(Math.random() * 10000) + 1;
			const precioUnidad = Math.floor(Math.random() * 10000) + 10;

			return {
				codigoCliente: proveedores[Math.floor(Math.random() * proveedores.length)],
				soles: `S/.${precioUnidad.toFixed(2)}`,
				dolares: `US$${cantidad.toFixed(2)}`,
				fechaVencimiento: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
			};
		});
	};

	useEffect(() => {
		setData(generateRandomData());
	}, []);

	return (
		<>
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Revisión de Cuentas por pagar</h2>
			<div className={styles.btnContainer}>
				<div className={styles.btnContent}>
					<CustomButton text="IMPORTAR" />
					<GenerateExcelButton data={data} mapping={mapping} sheetName="ResumenCuentasPagar" />
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
					<TextBoxField value={""} name="numeroComprobante" onChange={() => ""} direction="row" />
					<CustomButton text="Buscar" backgroundButton="#9B1139" colorP="white" />
				</div>
			</div>
			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />
		</>
	);
};

const columns = [
	{ nombre: "Cód. del Cliente / Proveedor", campo: "codigoCliente" },
	{ nombre: "Fecha de Ven.", campo: "fechaVencimiento" },
	{ nombre: "Soles", campo: "soles" },
	{ nombre: "Dólares", campo: "dolares" },
];

const optionFiltro = [
	{ name: "Cód. Proveedor", value: "proveedor3" },
	{ name: "Fecha", value: "proveedor4" },
];
