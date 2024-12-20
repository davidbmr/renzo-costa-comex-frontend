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
		empresa: "",
		tipoEmpresa: "",
		factura: "",
		referenciaEmbarque: "",
		fechaDOC: "",
		fechaVen: "",
		saldoUSD: "",
		saldoSoles: "",
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
				textLabel="Empresa:"
				name="empresa"
				value={newData.empresa}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="90px"
			/>

			<SelectField
				textLabel="Tipo de Empresa:"
				name="tipoEmpresa"
				value={newData.tipoEmpresa}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionTipoEmpresa}
				direction="row"
				labelWidth="90px"
			/>

			<SelectField
				textLabel="Factura:"
				name="factura"
				value={newData.factura}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionFactura}
				direction="row"
				labelWidth="90px"
			/>

			<SelectField
				textLabel="Referencia de Embarque:"
				name="referenciaEmbarque"
				value={newData.referenciaEmbarque}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionReferenciaEmbarque}
				direction="row"
				labelWidth="90px"
			/>

			<DateField textLabel="Fecha DOC:" direction="row" labelWidth="90px" />

			<DateField textLabel="Fecha Ven:" direction="row" labelWidth="90px" />

			<TextBoxField
				textLabel="Saldo USD:"
				name="saldoUSD"
				value={newData.saldoUSD}
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="90px"
			/>

			<TextBoxField
				textLabel="Saldo Soles:"
				name="saldoSoles"
				value={newData.saldoSoles}
				onChange={(e) => handleChangeInput(e, setNewData)}
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
	{ name: "Empresa 1", value: "empresa" },
	{ name: "Empresa 2", value: "empresa2" },
	{ name: "Empresa 3", value: "empresa3" },
	{ name: "Empresa 4", value: "empresa4" },
	{ name: "Empresa 5", value: "empresa5" },
];

const optionFactura = [
	{ name: "F000021", value: "tid45" },
	{ name: "F000022", value: "tid80" },
	{ name: "F000023", value: "tid78" },
	{ name: "F000024", value: "tid32" },
];

const optionTipoEmpresa = [
	{ name: "Agente de Aduanas", value: "agenteAduanad" },
];

const optionReferenciaEmbarque = [
	{ name: "FOR00001", value: "nuevo" },
	{ name: "FOR00002", value: "nuevo-reposicion" },
	{ name: "FOR00003", value: "reposicion" },
];
