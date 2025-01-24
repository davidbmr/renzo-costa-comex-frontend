import React, { useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import styles from "./SaldosIniciales.module.css";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModal } from "./AddModal/AddModal";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

export const SaldosIniciales = () => {
	const navigate = useNavigate();
	const [data, setData] = useState([
		{
			fecha: "",
			banco: "BCP",
			saldoInicialSoles: "1000",
			saldoInicialDolares: "2000",
			gastosSoles: "300",
			gastosDolares: "1000",
			saldoFinalSoles: "700",
			saldoFinalDolares: "1000",
		},
		{
			fecha: "",
			banco: "BBVA",
			saldoInicialSoles: "1000",
			saldoInicialDolares: "2000",
			gastosSoles: "300",
			gastosDolares: "1000",
			saldoFinalSoles: "700",
			saldoFinalDolares: "1000",
		},
		{
			fecha: "",
			banco: "SCOTIABANK",
			saldoInicialSoles: "1000",
			saldoInicialDolares: "2000",
			gastosSoles: "300",
			gastosDolares: "1000",
			saldoFinalSoles: "700",
			saldoFinalDolares: "1000",
		},
		{
			fecha: "",
			banco: "INTERBANK",
			saldoInicialSoles: "1000",
			saldoInicialDolares: "2000",
			gastosSoles: "300",
			gastosDolares: "1000",
			saldoFinalSoles: "700",
			saldoFinalDolares: "1000",
		},
	]);
	const addModal = useModal();
	const mapping = {
		fecha: "Fecha",
		banco: "Banco",
		saldoInicialSoles: "Saldo Inicial Soles",
		saldoInicialDolares: "Saldo Inicial Dólares",
		gastosSoles: "Gastos Soles",
		gastosDolares: "Gastos Dólares",
		saldoFinalSoles: "Saldo Final Soles",
		saldoFinalDolares: "Saldo Final Dólares",
	};

	return (
		<>
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Resumen de Saldos Iniciales</h2>
			<div className={styles.btnContainer}>
				<div className={styles.btnContent}>
					<CustomButton
						text="CREAR"
						backgroundButton="var(--primary-color-app)"
						colorP="white"
						onClick={() => navigate("/tesoreria/etapas-tesoreria/saldos-iniciales/creacion")}
					/>
					<CustomButton text="IMPORTAR" />
					<GenerateExcelButton data={data} mapping={mapping} sheetName="SaldosIniciales" />
				</div>

				<div className="flex justify-content-end">
					<span className="p-input-icon-left">
						<i className="pi pi-search" />
						<InputText type="search" placeholder="Buscar..." />
					</span>
				</div>
			</div>

			<DataTable
				columns={columns || []}
				data={data || []}
				isHeaderActive={false}
				onUpdate={() => ""}
				onDelete={() => ""}
				isPaginator={false}
			/>
			<br />
			<div className={styles.dateTable__container}>
				<DataTable
					onAddModal={addModal.onVisibleModal}
					textAddButton="Crear"
					columns={columns1 || []}
					data={data1 || []}
					isHeaderActive={true}
					onUpdate={() => ""}
					onDelete={() => ""}
					isPaginator={false}
				/>
			</div>

			<ConfirmacionEtapa />

			{/* Add Modal */}
			<PrimeModal
				header="Agregar Tipo de Cambio"
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
	{ nombre: "Fecha", campo: "fecha" },
	{ nombre: "Banco", campo: "banco" },
	{ nombre: "Saldo Inicial Soles", campo: "saldoInicialSoles" },
	{ nombre: "Saldo Inicial Dólares", campo: "saldoInicialDolares" },
	{ nombre: "Gastos Soles", campo: "gastosSoles" },
	{ nombre: "Gastos Dólares", campo: "gastosDolares" },
	{ nombre: "Saldo Final Soles", campo: "saldoFinalSoles" },
	{ nombre: "Saldo Final Dólares", campo: "saldoFinalDolares" },
];

const columns1 = [
	{ nombre: "TC", campo: "tipoCambio" },
	{ nombre: "Dólares", campo: "dolares" },
	{ nombre: "Soles", campo: "soles" },
	{ nombre: "Entidad", campo: "entidad" },
	{ nombre: "Fecha", campo: "fecha" },
];

const data1 = [{ tipoCambio: "3.7958", dolares: "70000", soles: "", entidad: "", fecha: "" }];
