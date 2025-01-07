/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./CreateCartaFianza.module.css";
import { SelectField } from "@/components/SelectField/SelectField";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { DateField } from "@/components/DateField/DateField";
import PrimeTextArea from "@/primeComponents/PrimeTextArea/PrimeTextArea";
import { CustomButton } from "@/components/CustomButton/CustomButton";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}
export const CreateCartaFianza = ({ postFetchData = true, updateFetchData }: PropsAddModal) => {
	return (
		<>
			<div className={styles.inputs}>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Documento"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Beneficiario"
				/>
				<DateField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Fecha Vto"
				/>
				<SelectField
					options={[]}
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Tipo de Moneda"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Monto"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Banco"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Comisón"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Porcentaje de Comisión"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Com. tr"
				/>

				<PrimeTextArea textLabel="Tienda" name={""} value={""} onChange={() => {}} />
			</div>
			<div className={styles.button}>
				<CustomButton text="GUARDAR" backgroundButton="#9B1139" colorP="white" />
			</div>
		</>
	);
};
