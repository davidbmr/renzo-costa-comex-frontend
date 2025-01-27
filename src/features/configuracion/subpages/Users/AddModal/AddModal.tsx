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
  last_name: { type: "string", required: true },
  email: { type: "string", isEmail: true, required: true },
  password: isEdit
    ? { type: "string", required: false } // No es obligatorio en edición
    : { type: "string", minLength: 8, required: true }, // Obligatorio en creación
  role_id: { type: "number", required: true, allowedValues: [1, 2, 3] },
  phone: {
    type: "string",
    regex: {
      pattern: /^\d{9}$/,
      errorMessage: "Debe ser un número de teléfono válido de 9 dígitos",
    },
    required: true,
  },
  birth_date:{type:"string", required:true}
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
      last_name: "",
      email: "",
      password: "",
      role_id: "",
      phone: "",
      birth_date: "",
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
        textLabel="Apellido:"
        name="last_name"
        value={values.last_name}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.last_name}
      />

      <TextBoxField
        textLabel="Correo Electrónico:"
        name="email"
        value={values.email}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.email}
      />

      {initialData === null && (
        <TextBoxField
          textLabel="Contraseña:"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          direction="row"
          labelWidth="120px"
          errorMessage={errors.password}
          maxLength={8}
        />
      )}

      <SelectField
        textLabel="Rol:"
        name="role_id"
        value={values.role_id}
        onChange={handleChange}
        options={roles}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.role_id}
        placeholder="Seleccione un rol"
      />

      <TextBoxField
        textLabel="Teléfono:"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.phone}
        maxLength={9}
      />

      <DateField
        textLabel="Fecha de Nacimiento:"
        name="birth_date"
        value={values.birth_date}
        onChange={handleChange}
        direction="row"
        labelWidth="120px"
        errorMessage={errors.birth_date}
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
