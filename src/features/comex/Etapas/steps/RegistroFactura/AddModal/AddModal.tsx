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
		tipo: "",
		orden: "",
		concepto: "",
		fecha: "",
		pago: "",
		montoPEN: "",
		montoUSD: "",
		referenciaCliente: "",
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
				textLabel="Tipo:"
				name="tipo"
				value={newData.tipo}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionSelect}
				direction="row"
				labelWidth="90px"
			/>

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
				textLabel="Concepto:"
				name="concepto"
				value={newData.concepto}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionConcepto}
				direction="row"
				labelWidth="90px"
			/>

			<DateField textLabel="Fecha:" direction="row" labelWidth="90px" />

			<TextBoxField
				textLabel="Pago:"
				name="pago"
				value={newData.pago}
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="90px"
			/>

			<TextBoxField
				textLabel="Monto PEN:"
				name="montoPEN"
				value={newData.montoPEN}
				onChange={(e) => handleChangeInput(e, setNewData)}
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

			<SelectField
				textLabel="Referencia Cliente:"
				name="referenciaCliente"
				value={newData.referenciaCliente}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionReferenciaCliente}
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
	{ name: "Terceros", value: "terceros" },
];

const optionOrden = [
	{ name: "235-2024-006", value: "tid45" },
	{ name: "235-2024-007", value: "tid80" },
	{ name: "235-2024-008", value: "tid78" },
	{ name: "235-2024-009", value: "tid32" },
];

const optionConcepto = [
	{ name: "Handling", value: "handling" },
	{ name: "Servicio de Terminal", value: "ServicioDeTerminal" },
	{ name: "Comisión", value: "comision" },
];

const optionReferenciaCliente = [
	{ name: "IMPO021", value: "tid45" },
	{ name: "IMPO022", value: "tid80" },
	{ name: "IMPO023", value: "tid78" },
	{ name: "IMPO024", value: "tid32" },
];
