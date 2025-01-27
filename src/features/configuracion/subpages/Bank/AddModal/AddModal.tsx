import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import style from "./AddModal.module.css";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";
import { useForm } from "@/hooks/useForm";
import {
  createValidationSchema,
  SchemaConfig,
} from "@/helpers/createValidationSchema";

interface PropsAddModal {
  postFetchData?: any;
}

const getSchemaConfig = (isEdit: boolean): SchemaConfig => ({
  name: { type: "string", required: true },
  exchange_rate: { type: "number", required: true },

});

const roles = [
  { name: "Administrador", value: 1 },
  { name: "Usuario", value: 2 },
  { name: "Invitado", value: 3 },
];

export const AddModal = ({ postFetchData, initialData }) => {
  const validationSchema = createValidationSchema(
    getSchemaConfig(!!initialData)
  );

  const {
    values,
    errors,
    handleChange,
    validateForm,
    setAllValues,
    resetForm,
  } = useForm({
    initialValues: {
      name: "",
      exchange_rate: "",
    },
    validationSchema,
  });

  // Actualiza los valores del formulario cuando cambie `initialData`
  useEffect(() => {
    if (initialData) {
      setAllValues(initialData); // Mapear los valores
    } else {
      resetForm(); // Limpiar el formulario si no hay datos iniciales
    }
  }, [initialData]); // Solo depende de `initialData`

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (isValid) {
      console.log("Datos enviados:", values);
    } else {
      console.error("Errores de validación:", errors);
    }
  };

  console.log(initialData);
  return (
    <div className={style.column__container}>
      <TextBoxField
        textLabel="Nombre:"
        name="name"
        value={values.name}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.name}
      />

      <TextBoxField
        textLabel="Tipo de Cambio:"
        name="exchange_rate"
        value={values.exchange_rate}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.exchange_rate}
        type="number"
      />

    

      <div>
        <Button
          className="p-button-sm p-button-info mr-2"
          onClick={handleSubmit}
        >
          GUARDAR
        </Button>
      </div>
    </div>
  );
};
