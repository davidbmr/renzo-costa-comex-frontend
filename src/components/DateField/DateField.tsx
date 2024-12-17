import React from "react";
import style from "./DateField.module.css";

import { Calendar } from "primereact/calendar";

interface Props {
	textLabel?: string;
	type?: "normal" | "mes";
	direction?: "row" | "column";
	labelWidth?: string;
	containerWidth?: string;
	value?: any;
	name?: any;
	onChange?: any;
	dateFormat?: any;
}

export const DateField = ({
	textLabel,
	type = "normal",
	direction = "column",
	labelWidth = "100%",
	containerWidth = "100%",
	value,
	name,
	onChange,
	dateFormat = "dd/mm/yy",
}: Props) => {
	const styles: React.CSSProperties = {
		width: labelWidth,
		fontSize: "14px",
	};
	const stylesContainer: React.CSSProperties = {
		width: containerWidth,
	};

	return (
		<div
			className={`${style.item__group} ${
				direction === "column" ? style.item__column : style.item__row
			}`}
			style={stylesContainer}
		>
			<label style={styles}>{textLabel}</label>

			{type === "normal" && (
				<Calendar
					style={{ height: "40px" }}
					value={value}
					name={name}
					dateFormat={dateFormat}
					onChange={onChange}
					showIcon
				/>
			)}
			{type === "mes" && (
				<Calendar
					style={{ height: "30px" }}
					value={value}
					name={name}
					onChange={onChange}
					view="month"
					dateFormat="mm/yy"
					showIcon
				/>
			)}
		</div>
	);
};
