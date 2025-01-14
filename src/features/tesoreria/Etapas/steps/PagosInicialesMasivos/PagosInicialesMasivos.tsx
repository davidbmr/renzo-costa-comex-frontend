import React, { useState } from "react";
import styles from "./PagosInicialesMasivos.module.css";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { SelectField } from "@/components/SelectField/SelectField";
import { useModal } from "@/hooks/useModal";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { RadioButtonField } from "@/components/RadioButtonField/RadioButtonField";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { AddModalProveedores } from "@/components/modals/AddModalProveedores/AddModalProveedores";

export const PagosInicialesMasivos = () => {
	const addModal = useModal();
	const options = [
		{ label: "Generar Pago", value: "P" },
		{ label: "Generar Archivo TXT", value: "A" },
		{ label: "Actualizar Referencias de Pagos", value: "R" },
		{ label: "Eliminar Pre-selección", value: "E" },
	];
	const [selectedOption, setSelectedOption] = useState<string | undefined>("opcion1");
	const handleOptionChange = (value: string) => {
		setSelectedOption(value);
	};

	return (
		<>
			<div className={styles.date__container}>
				<RadioButtonField
					title="Parámetros de Filtrado"
					options={options}
					name="tipoPago"
					selectedValue={selectedOption}
					onChange={handleOptionChange}
				/>
				<SelectField
					textLabel="Tipo de Pago:"
					name="tipoPago"
					options={optionTipoPago}
					value={""}
					onChange={() => ""}
					direction="row"
					labelWidth="140px"
				/>
				<SelectField
					textLabel="Banco:"
					name="banco"
					options={optionBanco}
					value={""}
					onChange={() => ""}
					direction="row"
					labelWidth="140px"
				/>
				<TextBoxField
					textLabel="Descripción de pago:"
					value={""}
					name="numeroComprobante"
					onChange={() => ""}
					direction="row"
					labelWidth="140px"
				/>
				<CustomButton text="Siguiente" backgroundButton="#9B1139" colorP="white"/>
			</div>

			<ConfirmacionEtapa />

			{/* Add Modal */}
			<PrimeModal
				header="Elegir el o los proveedores"
				modalStatus={addModal.modalStatus}
				onHideModal={addModal.onHideModal}
				width={700}
			>
				<AddModalProveedores />
			</PrimeModal>
		</>
	);
};

const optionTipoPago = [{ name: "Proveedores", value: "proveedor1" }];

const optionBanco = [
	{ name: "BCP", value: "proveedor1" },
	{ name: "BBVA", value: "proveedor2" },
	{ name: "SCOTIABANK", value: "proveedor3" },
	{ name: "INTERBANK", value: "proveedor4" },
];
