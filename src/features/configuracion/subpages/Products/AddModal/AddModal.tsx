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
  model_id: { type: "string", required: true },
  gender: { type: "string", required: true },
  description: { type: "string", required: true },
});

const roles = [
  { name: "Model 1", value: 1 },
  { name: "Model 2", value: 2 },
  { name: "Model 3", value: 3 },
];

const Sexo = [
  { name: "FEMENINO", value: 1 },
  { name: "MASCULINO", value: 2 },
  { name: "UNISEX", value: 3 },
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
      model_id: "",
      gender: "",
      description: "",
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

  return (
    <div className={style.column__container}>
      <SelectField
        textLabel="Modelo:"
        name="model_id"
        value={values.model_id}
        onChange={handleChange}
        options={roles}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.model_id}
        placeholder="Seleccione un Modelo"
      />
      <SelectField
        textLabel="Genero:"
        name="gender"
        value={values.gender}
        onChange={handleChange}
        options={Sexo}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.gender}
        placeholder="Seleccione un Genero"
      />

      <TextBoxField
        textLabel="Descripción:"
        name="description"
        value={values.description}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.description}
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
