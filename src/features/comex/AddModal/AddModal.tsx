import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";

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
		uso:"",
		total:"",
		cajas:"",
		kilos:""
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
				textLabel="Proveedor:"
				name="proveedor"
				value={newData.proveedor}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="80px"
			/>

			<TextBoxField
				textLabel="Orden:"
				value={newData.orden || ""}
				name="orden"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<DateField
				textLabel="Ingreso:"
				direction="row"
				labelWidth="80px"
				name="ingreso"
				value={newData.ingreso}
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			<SelectField
				textLabel="Estado:"
				name={"estado"}
				value={newData.estado}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionEstado}
				direction="row"
				labelWidth="80px"
			/>

			<TextBoxField
				textLabel="Descripción:"
				value={newData.descripcion || ""}
				name="descripcion"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<SelectField
				textLabel="Observación:"
				name={"observacion"}
				value={newData.observacion}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionObservacion}
				direction="row"
				labelWidth="80px"
			/>

			<SelectField
				textLabel="Uso:"
				name={"uso"}
				value={newData.uso}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionUso}
				direction="row"
				labelWidth="80px"
			/>

			<div className={style.two__container}>
				<TextBoxField
					textLabel="Total:"
					value={newData.total || ""}
					name="total"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<TextBoxField
					textLabel="Cajas:"
					value={newData.cajas || ""}
					name="cajas"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
			</div>
			<TextBoxField
				textLabel="Kilos:"
				value={newData.kilos || ""}
				name="kilos"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
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
	{ name: "Proveedor 1", value: "proveedor1" },
	{ name: "Proveedor 2", value: "proveedor2" },
	{ name: "Proveedor 3", value: "proveedor3" },
	{ name: "Proveedor 4", value: "proveedor4" },
	{ name: "Proveedor 5", value: "proveedor5" },
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