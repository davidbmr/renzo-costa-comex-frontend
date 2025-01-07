import React from "react";
import styles from "./CreatePrestamo.module.css";
import { SelectField } from "@/components/SelectField/SelectField";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { DateField } from "@/components/DateField/DateField";
import PrimeTextArea from "@/primeComponents/PrimeTextArea/PrimeTextArea";
import { CustomButton } from "@/components/CustomButton/CustomButton";

export const CreatePrestamo = () => {
	return (
		<>
			<div className={styles.inputs}>
				<SelectField
					options={[]}
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
					textLabel="Número"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Nombre del Proveedor"
				/>
				<DateField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Fecha de Emisión"
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
					textLabel="Intereses"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Tasa"
				/>
				<TextBoxField
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Plazo en Días"
				/>
				<SelectField
					options={[]}
					name=""
					value={""}
					onChange={() => {}}
					direction="row"
					labelWidth="100px"
					textLabel="Estado"
				/>
				<PrimeTextArea textLabel="Detalle" name={""} value={""} onChange={() => {}} />
			</div>
			<div className={styles.button}>
				<CustomButton text="GUARDAR" backgroundButton="#9B1139" colorP="white" />
			</div>
		</>
	);
};
