import React from "react";
import style from "./SelectField.module.css";
import { Dropdown } from "primereact/dropdown";

interface SelectFieldProps {
    textLabel?: string;
    value: string | undefined | number;
    name: string;
    placeholder?: string;
    optionLabel?: string; // Propiedad opcional para la etiqueta de las opciones
    optionValue?: string; // Propiedad opcional para el valor de las opciones
    onChange: (e: any) => void;
    options: any[];
    direction?: "row" | "column";
    labelWidth?: string;
    disabled?: boolean;
}

export const SelectField = ({
    textLabel,
    value,
    name,
    placeholder = "Seleccione una opción",
    optionLabel = "name", // Valor por defecto
    optionValue = "value", // Nuevo valor por defecto (opcional)
    onChange,
    options,
    direction = "column",
    labelWidth = "100%",
    disabled = false
}: SelectFieldProps) => {
    const styles: React.CSSProperties = {
        width: labelWidth,
        fontSize: "15px",
    };

    // Convertimos las opciones para que se ajusten a la estructura esperada por el Dropdown
    const formattedOptions = options.map(option => ({
        label: option[optionLabel],
        value: optionValue ? option[optionValue] : option
    }));

    return (
        <div className={`${direction === "column" ? style.column__item : style.row__item}`}>
            {textLabel ? <label style={styles}>{textLabel}</label> : null}

            <Dropdown
                style={{ height: "42px" }}
                value={value}
                name={name}
                onChange={onChange}
                options={formattedOptions}
                disabled={disabled}
                placeholder={placeholder}
                emptyMessage={<p className={style.emptyMessage__text}>No hay resultados.</p>}
            />
        </div>
    );
};
