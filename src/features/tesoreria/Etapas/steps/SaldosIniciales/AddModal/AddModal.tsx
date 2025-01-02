import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";
import { FileUpload } from "primereact/fileupload";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const AddModal = ({ postFetchData, updateFetchData, updateData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		tipoCambio: "",
		dolar: "",
		soles: "",
		entidad: "",
		fecha: "",
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

			<TextBoxField
				textLabel="Tipo de Cambio:"
				value={newData.tipoCambio || ""}
				name="tipoCambio"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<TextBoxField
				textLabel="Dólar:"
				value={newData.dolar || ""}
				name="dolar"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<TextBoxField
				textLabel="Soles:"
				value={newData.soles || ""}
				name="soles"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<SelectField
				textLabel="Entidad:"
				name={"entidad"}
				value={newData.entidad}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionBanco}
				direction="row"
				labelWidth="80px"
			/>

			<DateField
			textLabel="Fecha:"
			labelWidth="80px"
			direction="row"
			value={newData.fecha}
			onChange={(e) => handleChangeInput(e, setNewData)}
			/>
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

const optionBanco = [
	{ name: "BCP", value: "proveedor1" },
	{ name: "BBVA", value: "proveedor2" },
	{ name: "SCOTIABANK", value: "proveedor3" },
	{ name: "INTERBANK", value: "proveedor4" },
];

const optionEstado = [
	{ name: "Nuevo", value: "nuevo" },
];