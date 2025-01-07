import React, { useEffect, useState } from "react";
import styles from "./RevisionCuentasPagar.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { AddModal } from "./AddModal/AddModal";

export const RevisionCuentasPagar = () => {
	const [data, setData] = useState([]);
	const addModal = useModal();

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
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Revisión de Cuentas por pagar</h2>
			<div className={styles.btnContainer}>
				<div className={styles.btnContent}>
					<CustomButton text="IMPORTAR" />
					<GenerateExcelButton data={data} mapping={mapping} sheetName="RevicionCuentasPagar" />
					<CustomButton
						text="DESCARGAR RESUMEN"
						backgroundButton="#9B1139"
						colorP="white"
						onClick={addModal.onVisibleModal}
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
					<TextBoxField value={""} name="numeroComprobante" onChange={() => ""} direction="row" />
					<CustomButton text="Buscar" backgroundButton="#9B1139" colorP="white" />
				</div>
			</div>
			<DataTable columns={columns || []} data={testData} isHeaderActive={false} />
			<ConfirmacionEtapa />

			{/* Add Modal */}
			<PrimeModal
				header="Ingresar el rango de fecha"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
				width={400}
			>
				<AddModal postFetchData={true} />
			</PrimeModal>
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
const testData = [
	{
		numeroDocumento: "12345",
		numeroInterno: "7890",
		codigoCliente: "C001",
		fechaDocumento: "2024-01-01",
		fechaVencimiento: "2024-01-31",
		numeroComprobante: "001-12345",
		MonedaDocumento: "USD",
		cantidadPlazos: 1,
		grupoDetraccion: "G001",
		nombreGrupoDetraccion: "Servicios",
		idPlazo: "P001",
		total: 100.0,
		total1: 100.0,
		estado: "Activo",
		statusDocumento: "Aprobado",
	},
	{
		numeroDocumento: "12346",
		numeroInterno: "7891",
		codigoCliente: "C002",
		fechaDocumento: "2024-02-01",
		fechaVencimiento: "2024-02-28",
		numeroComprobante: "001-12346",
		MonedaDocumento: "USD",
		cantidadPlazos: 2,
		grupoDetraccion: "G002",
		nombreGrupoDetraccion: "Productos",
		idPlazo: "P002",
		total: 200.0,
		total1: 200.0,
		estado: "Activo",
		statusDocumento: "Pendiente",
	},
	{
		numeroDocumento: "12347",
		numeroInterno: "7892",
		codigoCliente: "C003",
		fechaDocumento: "2024-03-01",
		fechaVencimiento: "2024-03-31",
		numeroComprobante: "001-12347",
		MonedaDocumento: "EUR",
		cantidadPlazos: 1,
		grupoDetraccion: "G003",
		nombreGrupoDetraccion: "Servicios",
		idPlazo: "P003",
		total: 150.0,
		total1: 150.0,
		estado: "Inactivo",
		statusDocumento: "Rechazado",
	},
	{
		numeroDocumento: "12348",
		numeroInterno: "7893",
		codigoCliente: "C004",
		fechaDocumento: "2024-04-01",
		fechaVencimiento: "2024-04-30",
		numeroComprobante: "001-12348",
		MonedaDocumento: "USD",
		cantidadPlazos: 3,
		grupoDetraccion: "G004",
		nombreGrupoDetraccion: "Productos",
		idPlazo: "P004",
		total: 300.0,
		total1: 300.0,
		estado: "Activo",
		statusDocumento: "Aprobado",
	},
	{
		numeroDocumento: "12349",
		numeroInterno: "7894",
		codigoCliente: "C005",
		fechaDocumento: "2024-05-01",
		fechaVencimiento: "2024-05-31",
		numeroComprobante: "001-12349",
		MonedaDocumento: "EUR",
		cantidadPlazos: 1,
		grupoDetraccion: "G005",
		nombreGrupoDetraccion: "Servicios",
		idPlazo: "P005",
		total: 250.0,
		total1: 250.0,
		estado: "Inactivo",
		statusDocumento: "Pendiente",
	},
	{
		numeroDocumento: "12350",
		numeroInterno: "7895",
		codigoCliente: "C006",
		fechaDocumento: "2024-06-01",
		fechaVencimiento: "2024-06-30",
		numeroComprobante: "001-12350",
		MonedaDocumento: "USD",
		cantidadPlazos: 2,
		grupoDetraccion: "G006",
		nombreGrupoDetraccion: "Productos",
		idPlazo: "P006",
		total: 350.0,
		total1: 350.0,
		estado: "Activo",
		statusDocumento: "Rechazado",
	},
	{
		numeroDocumento: "12351",
		numeroInterno: "7896",
		codigoCliente: "C007",
		fechaDocumento: "2024-07-01",
		fechaVencimiento: "2024-07-31",
		numeroComprobante: "001-12351",
		MonedaDocumento: "EUR",
		cantidadPlazos: 1,
		grupoDetraccion: "G007",
		nombreGrupoDetraccion: "Servicios",
		idPlazo: "P007",
		total: 400.0,
		total1: 400.0,
		estado: "Inactivo",
		statusDocumento: "Aprobado",
	},
	{
		numeroDocumento: "12352",
		numeroInterno: "7897",
		codigoCliente: "C008",
		fechaDocumento: "2024-08-01",
		fechaVencimiento: "2024-08-31",
		numeroComprobante: "001-12352",
		MonedaDocumento: "USD",
		cantidadPlazos: 3,
		grupoDetraccion: "G008",
		nombreGrupoDetraccion: "Productos",
		idPlazo: "P008",
		total: 450.0,
		total1: 450.0,
		estado: "Activo",
		statusDocumento: "Pendiente",
	},
	{
		numeroDocumento: "12353",
		numeroInterno: "7898",
		codigoCliente: "C009",
		fechaDocumento: "2024-09-01",
		fechaVencimiento: "2024-09-30",
		numeroComprobante: "001-12353",
		MonedaDocumento: "EUR",
		cantidadPlazos: 1,
		grupoDetraccion: "G009",
		nombreGrupoDetraccion: "Servicios",
		idPlazo: "P009",
		total: 500.0,
		total1: 500.0,
		estado: "Inactivo",
		statusDocumento: "Rechazado",
	},
	{
		numeroDocumento: "12354",
		numeroInterno: "7899",
		codigoCliente: "C010",
		fechaDocumento: "2024-10-01",
		fechaVencimiento: "2024-10-31",
		numeroComprobante: "001-12354",
		MonedaDocumento: "USD",
		cantidadPlazos: 2,
		grupoDetraccion: "G010",
		nombreGrupoDetraccion: "Productos",
		idPlazo: "P010",
		total: 550.0,
		total1: 550.0,
		estado: "Activo",
		statusDocumento: "Aprobado",
	},
];

const optionFiltro = [
	{ name: "Núm. Comprobante", value: "proveedor1" },
	{ name: "Nombre", value: "proveedor2" },
	{ name: "Cód. Proveedor", value: "proveedor3" },
	{ name: "Fecha", value: "proveedor4" },
];
