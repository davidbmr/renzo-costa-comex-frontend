import React, { useState } from "react";
import styles from "./AccionistasRegalias.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { useModal } from "@/hooks/useModal";
import { CreateAccionistas } from "./Create/CreateAccionistas";
import { useNavigate } from "react-router-dom";

export const AccionistasAlquileres = () => {
	const createModal = useModal();
	const navigate = useNavigate();
	const [data] = useState([
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
			<div className={styles.comex__container}>
				<h2 style={{ color: "#333", textTransform: "uppercase" }}>Resumen de Saldos Iniciales</h2>
				<div className={styles.btnContainer}>
					<div className={styles.btnContent}>
						<CustomButton
							text="CREAR"
							backgroundButton="#9B1139"
							colorP="white"
							onClick={() =>
								navigate(
									"/tesoreria/etapas-tesoreria/revision-obligaciones/alquiler-accionistas-regalias/crear"
								)
							}
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
					data={testData}
					isHeaderActive={false}
					onEye={() => {}}
					onUpdate={() => {}}
				/>
				<DataTable
					columns={columns2 || []}
					data={testData2}
					isHeaderActive={false}
					onEye={() => {}}
					onUpdate={() => {}}
				/>
			</div>
			<PrimeModal
				header={"Crear nuevo registro"}
				onHideModal={createModal.onHideModal}
				modalStatus={createModal.modalStatus}
				width={10000}
			>
				<CreateAccionistas />
			</PrimeModal>
		</>
	);
};
const columns = [
	{ nombre: "Alquileres", campo: "alq" },
	{ nombre: "Enero", campo: "ene" },
	{ nombre: "Febrero", campo: "feb" },
	{ nombre: "Marzo", campo: "mar" },
	{ nombre: "Abril", campo: "abr" },
	{ nombre: "Mayo", campo: "may" },
	{ nombre: "Junio", campo: "jun" },
	{ nombre: "Julio", campo: "jul" },
	{ nombre: "Agosto", campo: "ago" },
	{ nombre: "Septiembre", campo: "sep" },
	{ nombre: "Octubre", campo: "oct" },
	{ nombre: "Noviembre", campo: "nov" },
	{ nombre: "Diciembre", campo: "dic" },
	{ nombre: "Local", campo: "loc" },
];
const columns2 = [
	{ nombre: "Regalías", campo: "reg" },
	{ nombre: "Enero", campo: "ene" },
	{ nombre: "Febrero", campo: "feb" },
	{ nombre: "Marzo", campo: "mar" },
	{ nombre: "Abril", campo: "abr" },
	{ nombre: "Mayo", campo: "may" },
	{ nombre: "Junio", campo: "jun" },
	{ nombre: "Julio", campo: "jul" },
	{ nombre: "Agosto", campo: "ago" },
	{ nombre: "Septiembre", campo: "sep" },
	{ nombre: "Octubre", campo: "oct" },
	{ nombre: "Noviembre", campo: "nov" },
	{ nombre: "Diciembre", campo: "dic" },
];
const testData = [
	{
		alq: "Farrel",
		ene: 1200,
		feb: 1300,
		mar: 1250,
		abr: 1400,
		may: 1350,
		jun: 1450,
		jul: 1500,
		ago: 1550,
		sep: 1600,
		oct: 1650,
		nov: 1700,
		dic: 1750,
		loc: 1865,
	},
	{
		alq: "Farrel",
		ene: 1000,
		feb: 1050,
		mar: 1100,
		abr: 1150,
		may: 1200,
		jun: 1250,
		jul: 1300,
		ago: 1350,
		sep: 1400,
		oct: 1450,
		nov: 1500,
		dic: 1550,
		loc: 1871,
	},
	{
		alq: "Farrel",
		ene: 800,
		feb: 850,
		mar: 900,
		abr: 950,
		may: 1000,
		jun: 1050,
		jul: 1100,
		ago: 1150,
		sep: 1200,
		oct: 1250,
		nov: 1300,
		dic: 1350,
		loc: 1820,
	},
	{
		alq: "Renzo Costa",
		ene: 1100,
		feb: 1150,
		mar: 1200,
		abr: 1250,
		may: 1300,
		jun: 1350,
		jul: 1400,
		ago: 1450,
		sep: 1500,
		oct: 1550,
		nov: 1600,
		dic: 1650,
		loc: 1865,
	},

	{
		alq: "Renzo Costa",
		ene: 900,
		feb: 950,
		mar: 1000,
		abr: 1050,
		may: 1100,
		jun: 1150,
		jul: 1200,
		ago: 1250,
		sep: 1300,
		oct: 1350,
		nov: 1400,
		dic: 1450,
		loc: 1871,
	},

	{
		alq: "Renzo Costa",
		ene: 700,
		feb: 750,
		mar: 800,
		abr: 850,
		may: 900,
		jun: 950,
		jul: 1000,
		ago: 1050,
		sep: 1100,
		oct: 1150,
		nov: 1200,
		dic: 1250,
		loc: 1820,
	},
	{
		alq: "Marina Busta",
		ene: 1200,
		feb: 1300,
		mar: 1250,
		abr: 1400,
		may: 1350,
		jun: 1450,
		jul: 1500,
		ago: 1550,
		sep: 1600,
		oct: 1650,
		nov: 1700,
		dic: 1750,
		loc: "Planta 2",
	},
	{
		alq: "Marina Busta",
		ene: 1200,
		feb: 1300,
		mar: 1250,
		abr: 1400,
		may: 1350,
		jun: 1450,
		jul: 1500,
		ago: 1550,
		sep: 1600,
		oct: 1650,
		nov: 1700,
		dic: 1750,
		loc: "2 de Mayo",
	},
	{
		alq: "Marina Busta",
		ene: 1200,
		feb: 1300,
		mar: 1250,
		abr: 1400,
		may: 1350,
		jun: 1450,
		jul: 1500,
		ago: 1550,
		sep: 1600,
		oct: 1650,
		nov: 1700,
		dic: 1750,
		loc: "Huallaga",
	},
	{
		alq: "Jordan",
		ene: 1100,
		feb: 1150,
		mar: 1200,
		abr: 1250,
		may: 1300,
		jun: 1350,
		jul: 1400,
		ago: 1450,
		sep: 1500,
		oct: 1550,
		nov: 1600,
		dic: 1650,
		loc: "Ovalo",
	},
	{
		alq: "Velarde",
		ene: 1100,
		feb: 1150,
		mar: 1200,
		abr: 1250,
		may: 1300,
		jun: 1350,
		jul: 1400,
		ago: 1450,
		sep: 1500,
		oct: 1550,
		nov: 1600,
		dic: 1650,
		loc: "Tacna",
	},
	{
		alq: "Arnao",
		ene: 1000,
		feb: 1050,
		mar: 1100,
		abr: 1150,
		may: 1200,
		jun: 1250,
		jul: 1300,
		ago: 1350,
		sep: 1400,
		oct: 1450,
		nov: 1500,
		dic: 1550,
		loc: "1877",
	},
];
const testData2 = [
	{
		reg: "Marina Busta",
		ene: 1500,
		feb: 1550,
		mar: 1600,
		abr: 1650,
		may: 1700,
		jun: 1750,
		jul: 1800,
		ago: 1850,
		sep: 1900,
		oct: 1950,
		nov: 2000,
		dic: 2050,
	},
	{
		reg: "Renzo Costa",
		ene: 1400,
		feb: 1450,
		mar: 1500,
		abr: 1550,
		may: 1600,
		jun: 1650,
		jul: 1700,
		ago: 1750,
		sep: 1800,
		oct: 1850,
		nov: 1900,
		dic: 1950,
	},
];
