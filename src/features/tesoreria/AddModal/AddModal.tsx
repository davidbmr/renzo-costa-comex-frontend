import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { DataTable } from "@/components/DataTable/DataTable";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		proveedor: "",
		orden: "",
		ingreso: "",
		estado: "",
		descripcion: "",
		observacion: "",
		uso: "",
		total: "",
		cajas: "",
		kilos: "",
	});

	const handleCreate = async () => {
		const formData = new FormData();
		Object.entries(newData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});

		postFetchData(formData);
	};

	const handleUpdate = async () => {
		const { id, ...restData } = newData;
		const formData = new FormData();
		Object.entries(restData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});
		updateFetchData(id, formData);
	};

	const handleBannerChange = (e: any) => {
		setNewData({ ...newData, banner: e.files[0] });
	};

	// Seteando el estado del input al data si existe el update
	useEffect(() => {
		if (updateData) {
			setNewData(updateData);
		}
	}, [updateData]);

	return (
		<div className={style.column__container}>
			<SelectField
				textLabel="Banco:"
				name="proveedor"
				value={newData.proveedor}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="80px"
			/>
			<div className={style.two__container}>
				<TextBoxField
					textLabel="Saldo Inicial Soles:"
					value={newData.orden || ""}
					name="orden"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<TextBoxField
					textLabel="Saldo Inicial Dólares:"
					value={newData.orden || ""}
					name="orden"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
			</div>

			<div className={style.two__container}>
				<TextBoxField
					textLabel="Ingreso:"
					value={newData.orden || ""}
					name="orden"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<TextBoxField
					textLabel=""
					value={newData.descripcion || ""}
					name="descripcion"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<SelectField
					textLabel=""
					name="moneda"
					value={newData.moneda}
					onChange={(e) => handleChangeInput(e, setNewData)}
					options={optionSelect}
					direction="row"
					labelWidth="80px"
				/>
				<CustomButton text="Agregar" backgroundButton="#9B1139" colorP="white" />
			</div>

			<div className={style.two__container}>
				<TextBoxField
					textLabel="Egreso:"
					value={newData.orden || ""}
					name="orden"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<TextBoxField
					textLabel=""
					value={newData.descripcion || ""}
					name="descripcion"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<SelectField
					textLabel=""
					name="moneda"
					value={newData.moneda}
					onChange={(e) => handleChangeInput(e, setNewData)}
					options={optionSelect}
					direction="row"
					labelWidth="80px"
				/>
				<CustomButton text="Agregar" backgroundButton="#9B1139" colorP="white" />
			</div>

			<DataTable columns={columns || []} data={[]} isHeaderActive={true} textAddButton="Agregar" />
			<DataTable columns={columns2 || []} data={[]} isHeaderActive={false} />

			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						GUARDAR
					</Button>
				</div>
			)}

			{updateFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleUpdate}>
						GUARDAR
					</Button>
				</div>
			)}
		</div>
	);
};

const optionSelect = [
	{ name: "BCP", value: "proveedor1" },
	{ name: "BBVA", value: "proveedor2" },
	{ name: "SCOTIABANK", value: "proveedor3" },
	{ name: "INTERBANK", value: "proveedor4" },
];

const optionEstado = [
	{ name: "Producción", value: "produccion" },
	{ name: "Tránsito", value: "transito" },
];

const optionObservacion = [
	{ name: "Reposición", value: "reposicion" },
	{ name: "Nuevo", value: "nuevo" },
	{ name: "Nuevo/Reposición", value: "nuevo-reposicion" },
];

const optionUso = [
	{ name: "Dama", value: "dama" },
	{ name: "Caballero", value: "caballero" },
	{ name: "Dama/Caballero", value: "dama-caballero" },
];

const columns = [
	{ nombre: "Ingresos", campo: "saldoInicialSoles" },
	{ nombre: "Soles", campo: "saldoInicialDolares" },
	{ nombre: "Dólares", campo: "gastosSoles" },
]

const columns2 = [
	{ nombre: "Egresos", campo: "saldoInicialSoles" },
	{ nombre: "Soles", campo: "saldoInicialDolares" },
	{ nombre: "Dólares", campo: "gastosSoles" },
]