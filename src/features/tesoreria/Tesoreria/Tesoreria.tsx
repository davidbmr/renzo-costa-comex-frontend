import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./Tesoreria.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { InputText } from "primereact/inputtext";
import { AddModal } from "../AddModal/AddModal";

export const Tesoreria = () => {
	const navigate = useNavigate();
	const addModal = useModal();
	// const [showForm, setShowForm] = useState(false);
	const [data, setData] = useState([]);

	const mapping = {
    saldoInicialSoles: "Saldo Inicial Soles",
    saldoInicialDolares: "Saldo Inicial Dólares",
    gastosSoles: "Gastos Soles",
    gastosDolares: "Gastos Dólares",
    saldoFinalSoles: "Saldo Final Soles",
    saldoFinalDolares: "Saldo Final Dólares",
	};

	const generateRandomData = (numItems = 50) => {

		return Array.from({ length: numItems }, (_, index) => {
			const cantidad = Math.floor(Math.random() * 100) + 1;
      const gasto = Math.floor(Math.random() * 10000) + 1;
      const gastoD = Math.floor(Math.random() * 10000) + 1;

			const precioUnidad = Math.floor(Math.random() * 90) + 10;
			const total = cantidad * precioUnidad;

			return {
				saldoInicialSoles: `S/.${total.toFixed(2)}`,
				saldoInicialDolares: `US$${precioUnidad.toFixed(2)}`,
        gastosSoles: `S/.${gasto.toFixed(2)}`,
        gastosDolares: `US$${gastoD.toFixed(2)}`,
				ingreso: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
				cantidad,
				total: `US$${total.toFixed(2)}`,
				eta: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),

			};
		});
	};

	useEffect(() => {
		setData(generateRandomData());
	}, []);

	return (
		<>
			<MainContentStructure>
				<h2 style={{ color: "#333", textTransform: "uppercase" }}>Tesorería</h2>
				<div className={styles.btnContainer}>
					<div className={styles.btnContent}>
						<CustomButton
							text="Crear"
							backgroundButton="#9B1139"
							colorP="white"
							onClick={() => navigate("/tesoreria/flujo-creacion")}
						/>
						<CustomButton text="Importar" />
						<GenerateExcelButton data={data} mapping={mapping} sheetName="Tesoreria" />
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
					onEye={() => {}}
          onUpdate={()=>{}}
				/>
			</MainContentStructure>
			{/* Add Modal */}
			<PrimeModal
				header="Agregar Flujo Diario"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
				width={800}
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
]
