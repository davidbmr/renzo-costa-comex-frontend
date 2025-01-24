import React from "react";
import style from "./SelectField.module.css";
import { Dropdown } from "primereact/dropdown";

interface SelectFieldProps {
    textLabel?: string;
    value: string | undefined | number;
    name: string;
    placeholder?: string;
    optionLabel?: string;
    optionValue?: string;
    onChange: (e: any) => void;
    options: any[];
    direction?: "row" | "column";
    labelWidth?: string;
    disabled?: boolean;
    containerWidth?: string; // Nueva propiedad
    errorMessage?: string; // Nueva propiedad
}

export const SelectField = ({
    textLabel,
    value,
    name,
    placeholder = "Seleccione una opción",
    optionLabel = "name",
    optionValue = "value",
    onChange,
    options,
    direction = "column",
    labelWidth = "100%",
    containerWidth = "100%", // Valor por defecto para el contenedor
    disabled = false,
    errorMessage,
}: SelectFieldProps) => {
    const styles: React.CSSProperties = {
        width: labelWidth,
        fontSize: "14px",
    };
    const stylesContainer: React.CSSProperties = {
        width: containerWidth,
    };

    const formattedOptions = options.map(option => ({
        label: option[optionLabel],
        value: optionValue ? option[optionValue] : option,
    }));

    return (
        <div className={style.parent__container} style={stylesContainer}>
            {/* Contenedor interno que soporta las direcciones row y column */}
            <div
                className={`${style.item__group} ${
                    direction === "column" ? style.item__column : style.item__row
                }`}
            >
                {textLabel ? <label style={styles}>{textLabel}</label> : null}

                <Dropdown
                    style={{ height: "42px" }}
                    className={errorMessage ? style.input__error : ""}
                    value={value}
                    name={name}
                    onChange={onChange}
                    options={formattedOptions}
                    disabled={disabled}
                    placeholder={placeholder}
                    emptyMessage={<p className={style.emptyMessage__text}>No hay resultados.</p>}
                />
            </div>

            {/* Mensaje de error fuera del grupo */}
            {errorMessage && <small className={style.error__message}>{errorMessage}</small>}
        </div>
    );
};
