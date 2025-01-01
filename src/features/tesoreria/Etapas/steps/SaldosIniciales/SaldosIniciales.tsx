import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/store/hooks";
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
			saldoInicialSoles: "1",
			saldoInicialDolares: "2",
			gastosSoles: "3",
			gastosDolares: "4",
			saldoFinalSoles: "5",
			saldoFinalDolares: "6",
		},
	]);
	const addModal = useModal();
	const mapping = {
		referencia: "Referencia",
		fecha: "Fecha",
		diario: "Diario",
		saldoInicial: "Saldo Inicial",
		saldoFinal: "Saldo Final",
		estado: "Estado",
	};

	return (
		<>
			<h2 style={{ color: "#333", textTransform: "uppercase" }}>Resumen de Saldos Iniciales</h2>
			<div className={styles.btnContainer}>
				<div className={styles.btnContent}>
					<CustomButton
						text="Crear"
						backgroundButton="#9B1139"
						colorP="white"
						onClick={() => navigate("/tesoreria/etapas-tesoreria/saldos-iniciales/creacion")}
					/>
					<CustomButton text="Importar" />
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
				onEye={() => ""}
				isPaginator={false}
			/>
			<ConfirmacionEtapa />

			{/* Add Modal */}
			<PrimeModal
				header="Agregar Saldos Iniciales"
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
	{ nombre: "Saldo Inicial Soles", campo: "saldoInicialSoles" },
	{ nombre: "Saldo Inicial Dólares", campo: "saldoInicialDolares" },
	{ nombre: "Gastos Soles", campo: "gastosSoles" },
	{ nombre: "Gastos Dólares", campo: "gastosDolares" },
	{ nombre: "Saldo Final Soles", campo: "saldoFinalSoles" },
	{ nombre: "Saldo Final Dólares", campo: "saldoFinalDolares" },
];
