import React, { useState } from "react";
import style from "./IngresoEgresoModal.module.css";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { SelectField } from "@/components/SelectField/SelectField";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { handleChangeInput } from "@/helpers/handleTextBox";

interface PropsIngresoEgresoModal {
	postFetchData: any;
}

export const IngresoEgresoModal = ({ postFetchData }: PropsIngresoEgresoModal) => {
	const [newData, setNewData] = useState<any>({
		descripcion: "",
		monto: "",
		moneda: "",
	});

	return (
		<div className={style.form__container}>
			<TextBoxField
				textLabel="Descripción:"
				value={newData.descripcion || ""}
				name="descripcion"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="120px"
			/>
			<TextBoxField
				textLabel="Monto:"
				value={newData.monto || ""}
				name="monto"
				onChange={(e) => handleChangeInput(e, setNewData)}
				direction="row"
				labelWidth="120px"
			/>
			<SelectField
				textLabel="Tipo de moneda:"
				name="moneda"
				value={newData.moneda}
				onChange={(e) => handleChangeInput(e, setNewData)}
				options={optionMoneda}
				direction="row"
				labelWidth="120px"
			/>
			<CustomButton
				text="Agregar"
				backgroundButton="#9B1139"
				colorP="white"
				onClick={postFetchData}
			/>
		</div>
	);
};

const optionMoneda = [
	{ name: "Soles", value: "soles" },
	{ name: "Dólares", value: "dolares" },
];
