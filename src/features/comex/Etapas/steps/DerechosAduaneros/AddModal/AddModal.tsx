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
		orden: "",
		proveedor: "",
		montoUSD: "",
		fechaNum: "",
		numDUA: "",
		fechaPago: "",
		estado: "",
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
				textLabel="Orden:"
				name="orden"
				value={newData.orden}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionOrden}
				direction="row"
				labelWidth="90px"
			/>

			<SelectField
				textLabel="Proveedor:"
				name="proveedor"
				value={newData.proveedor}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="90px"
			/>

			<TextBoxField
				textLabel="Monto USD:"
				name="montoUSD"
				value={newData.montoUSD}
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="90px"
			/>

			<DateField textLabel="Fecha de numeración:" direction="row" labelWidth="90px" />
			
			<TextBoxField
				textLabel="Número de DUA:"
				name="montoUSD"
				value={newData.montoUSD}
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="90px"
			/>

			<DateField textLabel="Fecha de Pago:" direction="row" labelWidth="90px" />

			<SelectField
				textLabel="Estado:"
				name="estado"
				value={newData.estado}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionEstado}
				direction="row"
				labelWidth="90px"
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

const optionSelect = [
	{ name: "Proveedor 1", value: "proveedor" },
	{ name: "Proveedor 2", value: "proveedor2" },
	{ name: "Proveedor 3", value: "proveedor3" },
	{ name: "Proveedor 4", value: "proveedor4" },
	{ name: "Proveedor 5", value: "proveedor5" },
];

const optionOrden = [
	{ name: "FOR021", value: "tid45" },
	{ name: "FOR022", value: "tid80" },
	{ name: "FOR023", value: "tid78" },
	{ name: "FOR024", value: "tid32" },
];

const optionEstado = [
	{ name: "Abonado", value: "abonado" },
];
