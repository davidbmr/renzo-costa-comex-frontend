import React from "react";
import style from "./RadioButtonField.module.css";

interface Option {
	label: string;
	value: string;
}

interface RadioButtonFieldProps {
	title?: string; // Propiedad para el título
	name: string;
	options: Option[];
	selectedValue?: string;
	onChange: (value: string) => void;
	hiddenFields?: string[]; // Array de strings para los campos a ocultar
	condition?: boolean; // Condición para mostrar/ocultar campos
}

export const RadioButtonField: React.FC<RadioButtonFieldProps> = ({
	title,
	name,
	options,
	selectedValue,
	onChange,
	hiddenFields = [], // Valor por defecto como array vacío
	condition = true, // Valor por defecto como true
}) => {
	// Verificar si el nombre está en el array de ocultar y si la condición es falsa
	const shouldHide = hiddenFields.includes(name) && !condition;

	// Si debe ocultarse, no renderizar nada
	if (shouldHide) {
		return null; // No mostrar el título ni los radio buttons
	}

	return (
		<div className={style.containerStyle}>
			<h4 className={style.titleStyle}>{title}</h4>
			{options.map((option) => (
				<div key={option.value} className={style.radioOption}>
					<input
						type="radio"
						name={name}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={(e) => onChange(e.target.value)}
					/>
					<label >
						{option.label}
					</label>
				</div>
			))}
		</div>
	);
};
