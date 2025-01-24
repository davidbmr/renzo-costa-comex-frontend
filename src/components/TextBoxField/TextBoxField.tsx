import React, { ChangeEvent } from "react";
import style from "./TextBoxField.module.css";

import { InputText } from "primereact/inputtext";

interface TextBoxFieldProps {
	textLabel?: string;
	value: string | undefined | any;
	name: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	direction?: "row" | "column";
	disabled?: boolean;
	labelWidth?: string;
	placeholder?: string;
	containerWidth?: string;
	errorMessage?: string;
	maxLength?:number;
}

export const TextBoxField = ({
	textLabel,
	value,
	name,
	type = "text",
	onChange,
	direction = "column",
	disabled = false,
	labelWidth = "100%",
	containerWidth = "100%",
	placeholder,
	errorMessage,
	maxLength,
}: TextBoxFieldProps) => {
	const styles: React.CSSProperties = {
		width: labelWidth,
		fontSize: "14px",
	};
	const stylesContainer: React.CSSProperties = {
		width: containerWidth,
	};

	return (
		<div className={style.parent__container} style={stylesContainer}>
		
			<div
				className={`${style.item__group} ${
					direction === "column" ? style.item__column : style.item__row
				}`}
			>
				{textLabel ? <label style={styles}>{textLabel}</label> : <></>}

				<InputText
					className={`p-inputtext-sm ${errorMessage ? style.input__error : ""}`}
					value={value}
					name={name}
					type={type}
					onChange={onChange}
					autoComplete="off"
					disabled={disabled}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			</div>

			{/* Mensaje de error fuera del grupo */}
			{errorMessage && <small className={style.error__message}>{errorMessage}</small>}
		</div>
	);
};
