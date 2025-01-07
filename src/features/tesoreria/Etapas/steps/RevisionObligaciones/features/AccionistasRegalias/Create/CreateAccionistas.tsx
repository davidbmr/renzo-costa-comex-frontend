/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import style from "./CreateAccionistas.module.css";
import { Button } from "primereact/button";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DataTable } from "@/components/DataTable/DataTable";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const CreateAccionistas = ({ postFetchData = true, updateFetchData }: PropsAddModal) => {
	return (
		<>
			<MainContentStructure>
				<h2 style={{ color: "#333", textTransform: "uppercase", marginBottom: "20px" }}>
					Crear flujo diario
				</h2>
				<div className={style.two__container}>
					<SelectField
						options={[
							{ name: "Alquiler", value: "1" },
							{ name: "Regalía", value: "0" },
						]}
						name=""
						textLabel="Tipo: "
						value={""}
						onChange={() => {}}
					/>
					<SelectField options={months} textLabel="Mes: " name="" value={""} onChange={() => {}} />
					<TextBoxField
						textLabel="Saldo:"
						value={""}
						name="saldoInicialDolares"
						onChange={() => {}}
						labelWidth="140px"
					/>
				</div>
				<DataTable columns={columns} data={[]} isHeaderActive={!true} />

				{postFetchData && (
					<div>
						<Button
							className="p-button-sm p-button-info mr-2"
							onClick={() => {}}
							style={{ fontWeight: "600", marginTop: "15px" }}
						>
							GUARDAR REGISTRO
						</Button>
					</div>
				)}

				{updateFetchData && (
					<div>
						<Button
							className="p-button-sm p-button-info mr-2"
							onClick={() => {}}
							style={{ fontWeight: "600", marginTop: "15px" }}
						>
							GUARDAR REGISTRO
						</Button>
					</div>
				)}
			</MainContentStructure>
		</>
	);
};
const months = [
	{ name: "Enero", value: "ene" },
	{ name: "Febrero", value: "feb" },
	{ name: "Marzo", value: "mar" },
	{ name: "Abril", value: "abr" },
	{ name: "Mayo", value: "may" },
	{ name: "Junio", value: "jun" },
	{ name: "Julio", value: "jul" },
	{ name: "Agosto", value: "ago" },
	{ name: "Septiembre", value: "sep" },
	{ name: "Octubre", value: "oct" },
	{ name: "Noviembre", value: "nov" },
	{ name: "Diciembre", value: "dic" },
];
const columns = [
	{ nombre: "Tipo", campo: "tipo" },
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
