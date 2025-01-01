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
		modelo: "",
		itemCodigo: "",
		descripcion: "",
		pedidoDIC: "",
		precioPEN: "",
		estado: "",
		foto: "",
		conFoto: "",
		conPrecio: "",
		CostoUSD: "",
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
				textLabel="Modelo:"
				name="modelo"
				value={newData.modelo}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="80px"
			/>

			<SelectField
				textLabel="Item Código:"
				name="itemCodigo"
				value={newData.itemCodigo}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionItemCod}
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

			<TextBoxField
				textLabel="Pedido DIC:"
				value={newData.pedidoDIC || ""}
				name="pedidoDIC"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
			/>

			<TextBoxField
				textLabel="Precio (PEN):"
				value={newData.precioPEN || ""}
				name="precioPEN"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="80px"
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

			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<label>Archivo de imagen</label>
				<FileUpload
					mode="basic"
					name="file_field_name"
					accept="image/*"
					maxFileSize={1000000}
					onSelect={handleBannerChange}
					chooseLabel="Cargar imagen"
				/>
			</div>

			<div className={style.two__container}>
				<TextBoxField
					textLabel="Con foto:"
					value={newData.conFoto || ""}
					name="conFoto"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
				<TextBoxField
					textLabel="Con precio:"
					value={newData.conPrecio || ""}
					name="conPrecio"
					onChange={(e) => handleChangeInput(e, setNewData)}
					direction="row"
					labelWidth="80px"
				/>
			</div>

			<TextBoxField
					textLabel="Costo (USD):"
					value={newData.CostoUSD || ""}
					name="CostoUSD"
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
	{ name: "Modelo 1", value: "modelo1" },
	{ name: "Modelo 2", value: "modelo2" },
	{ name: "Modelo 3", value: "modelo3" },
	{ name: "Modelo 4", value: "modelo4" },
	{ name: "Modelo 5", value: "modelo5" },
];

const optionEstado = [
	{ name: "Nuevo", value: "nuevo" },
];

const optionItemCod = [
	{ name: "TIC3540045", value: "tic45" },
	{ name: "TIC3540080", value: "tic80" },
	{ name: "TIC3540078", value: "tic78" },
	{ name: "TIC3540032", value: "tic32" },
];