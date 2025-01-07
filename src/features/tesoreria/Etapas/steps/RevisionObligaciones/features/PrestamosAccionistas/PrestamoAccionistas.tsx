import React from "react";
import styles from "./PrestamoAccionistas.module.css";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";
import { DataTable } from "@/components/DataTable/DataTable";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { CreatePrestamo } from "./Create/CreatePrestamo";
import { useModal } from "@/hooks/useModal";

export const PrestamoAccionistas = () => {
	const addModal = useModal();
	return (
		<>
			<div className={styles.comex__container}>
				<h2 style={{ color: "#333", textTransform: "uppercase" }}>Préstamo de Accionistas</h2>
				<div className={styles.btnContainer}>
					<div className={styles.btnContent}>
						<CustomButton
							text="CREAR"
							backgroundButton="#9B1139"
							colorP="white"
							onClick={() => addModal.onVisibleModal()}
						/>
						<CustomButton text="IMPORTAR" />
						<GenerateExcelButton data={[]} mapping={{}} sheetName="SaldosIniciales" />
					</div>

					<div className="flex justify-content-end">
						<span className="p-input-icon-left">
							<i className="pi pi-search" />
							<InputText type="search" placeholder="Buscar..." />
						</span>
					</div>
				</div>

				<DataTable columns={columns} data={data} isHeaderActive={false} onEye={() => {}} />
			</div>
			<PrimeModal
				header={"Crear Prestamo"}
				onHideModal={addModal.onHideModal}
				modalStatus={addModal.modalStatus}
			>
				<CreatePrestamo />
			</PrimeModal>
		</>
	);
};
const columns = [
	{ nombre: "Banco", campo: "banco" },
	{ nombre: "Número", campo: "nro" },
	{ nombre: "Nombre Proveedor", campo: "proveedor" },
	{ nombre: "Fecha Emisión", campo: "emision" },
	{ nombre: "Fecha Vto", campo: "vtoDate" },
	{ nombre: "Moneda", campo: "moneda" },
	{ nombre: "Monto Original", campo: "monto" },
	{ nombre: "Intereses", campo: "intereses" },
	{ nombre: "Monto Total", campo: "total" },
	{ nombre: "Tasa", campo: "tasa" },
	{ nombre: "Plazo Días", campo: "plazo" },
	{
		nombre: "Estado",
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body: (prev: any) => {
			return (
				<p
					style={{
						color:
							prev.est === "0"
								? "blue"
								: prev.est === "1"
								? "red"
								: prev.est === "3"
								? "black"
								: "",
					}}
				>
					{prev.est === "0"
						? "Cancelado"
						: prev.est === "1"
						? "Por Vencer"
						: prev.est === "3"
						? "Solesdiente de Fecha"
						: ""}
				</p>
			);
		},
	},
	{ nombre: "Detalle", campo: "detail" },
];
const data = [
	{
		banco: "Banco de la Nación",
		nro: "001",
		proveedor: "Proveedor A",
		emision: "2024-01-01",
		vtoDate: "2024-02-01",
		moneda: "Soles",
		monto: 1000.0,
		intereses: 50.0,
		total: 1050.0,
		tasa: 5.0,
		plazo: 30,
		est: "0",
		detail: "Pago de servicios",
	},
	{
		banco: "BBVA Perú",
		nro: "002",
		proveedor: "Proveedor B",
		emision: "2024-01-15",
		vtoDate: "2024-02-15",
		moneda: "Soles",
		monto: 2000.0,
		intereses: 100.0,
		total: 2100.0,
		tasa: 5.0,
		plazo: 30,
		est: "1",
		detail: "Compra de materiales",
	},
	{
		banco: "Scotiabank Perú",
		nro: "003",
		proveedor: "Proveedor C",
		emision: "2024-02-01",
		vtoDate: "2024-03-01",
		moneda: "Soles",
		monto: 3000.0,
		intereses: 150.0,
		total: 3150.0,
		tasa: 5.0,
		plazo: 30,
		est: "3",
		detail: "Alquiler de equipo",
	},
	{
		banco: "Interbank",
		nro: "004",
		proveedor: "Proveedor D",
		emision: "2024-02-15",
		vtoDate: "2024-03-15",
		moneda: "Soles",
		monto: 4000.0,
		intereses: 200.0,
		total: 4200.0,
		tasa: 5.0,
		plazo: 30,
		est: "0",
		detail: "Servicios de consultoría",
	},
	{
		banco: "BCP",
		nro: "005",
		proveedor: "Proveedor E",
		emision: "2024-03-01",
		vtoDate: "2024-04-01",
		moneda: "Soles",
		monto: 5000.0,
		intereses: 250.0,
		total: 5250.0,
		tasa: 5.0,
		plazo: 30,
		est: "1",
		detail: "Compra de equipos",
	},
	{
		banco: "MiBanco",
		nro: "006",
		proveedor: "Proveedor F",
		emision: "2024-03-15",
		vtoDate: "2024-04-15",
		moneda: "Soles",
		monto: 6000.0,
		intereses: 300.0,
		total: 6300.0,
		tasa: 5.0,
		plazo: 30,
		est: "3",
		detail: "Servicios de mantenimiento",
	},
	{
		banco: "Banco Pichincha",
		nro: "007",
		proveedor: "Proveedor G",
		emision: "2024-04-01",
		vtoDate: "2024-05-01",
		moneda: "Soles",
		monto: 7000.0,
		intereses: 350.0,
		total: 7350.0,
		tasa: 5.0,
		plazo: 30,
		est: "0",
		detail: "Servicios de transporte",
	},
	{
		banco: "BanBif",
		nro: "008",
		proveedor: "Proveedor H",
		emision: "2024-04-15",
		vtoDate: "2024-05-15",
		moneda: "Soles",
		monto: 8000.0,
		intereses: 400.0,
		total: 8400.0,
		tasa: 5.0,
		plazo: 30,
		est: "1",
		detail: "Compra de suministros",
	},
	{
		banco: "Banco GNB",
		nro: "009",
		proveedor: "Proveedor I",
		emision: "2024-05-01",
		vtoDate: "2024-06-01",
		moneda: "Soles",
		monto: 9000.0,
		intereses: 450.0,
		total: 9450.0,
		tasa: 5.0,
		plazo: 30,
		est: "3",
		detail: "Alquiler de oficinas",
	},
	{
		banco: "Banco Falabella",
		nro: "010",
		proveedor: "Proveedor J",
		emision: "2024-05-15",
		vtoDate: "2024-06-15",
		moneda: "Soles",
		monto: 10000.0,
		intereses: 500.0,
		total: 10500.0,
		tasa: 5.0,
		plazo: 30,
		est: "0",
		detail: "Servicios de publicidad",
	},
	{
		banco: "Banco Ripley",
		nro: "011",
		proveedor: "Proveedor K",
		emision: "2024-06-01",
		vtoDate: "2024-07-01",
		moneda: "Soles",
		monto: 11000.0,
		intereses: 550.0,
		total: 11550.0,
		tasa: 5.0,
		plazo: 30,
		est: "1",
		detail: "Compra de mobiliario",
	},
	{
		banco: "CitiBank",
		nro: "012",
		proveedor: "Proveedor L",
		emision: "2024-06-15",
		vtoDate: "2024-07-15",
		moneda: "Soles",
		monto: 12000.0,
		intereses: 600.0,
		total: 12600.0,
		tasa: 5.0,
		plazo: 30,
		est: "3",
		detail: "Servicios de limpieza",
	},
	{
		banco: "HSBC",
		nro: "013",
		proveedor: "Proveedor M",
		emision: "2024-07-01",
		vtoDate: "2024-08-01",
		moneda: "Soles",
		monto: 13000.0,
		intereses: 650.0,
		total: 13650.0,
		tasa: 5.0,
		plazo: 30,
		est: "0",
		detail: "Compra de tecnología",
	},
	{
		banco: "Banco Internacional",
		nro: "014",
		proveedor: "Proveedor N",
		emision: "2024-07-15",
		vtoDate: "2024-08-15",
		moneda: "Soles",
		monto: 14000.0,
		intereses: 700.0,
		total: 14700.0,
		tasa: 5.0,
		plazo: 30,
		est: "1",
		detail: "Servicios legales",
	},
	{
		banco: "Banco de Comercio",
		nro: "015",
		proveedor: "Proveedor O",
		emision: "2024-08-01",
		vtoDate: "2024-09-01",
		moneda: "Soles",
		monto: 15000.0,
		intereses: 750.0,
		total: 15750.0,
		tasa: 5.0,
		plazo: 30,
		est: "3",
		detail: "Compra de software",
	},
];
