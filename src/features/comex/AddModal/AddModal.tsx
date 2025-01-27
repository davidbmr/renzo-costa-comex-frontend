import React, { useEffect, useState } from "react";
import style from "./AddModal.module.css";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";
import {
  createValidationSchema,
  SchemaConfig,
} from "@/helpers/createValidationSchema";
import { useForm } from "@/hooks/useForm";

interface PropsAddModal {
  postFetchData?: any;
  updateFetchData?: any;
  updateData?: any;
}

const getSchemaConfig = (isEdit: boolean): SchemaConfig => ({
  proveedor: { type: "string", required: true },
  orden: { type: "string", required: true },
  ingreso: { type: "string", required: true },
  estado: { type: "string", required: true },
  descripcion: { type: "string", required: true },
  observacion: { type: "string", required: true },
  uso: { type: "string", required: true },
  total: { type: "number", required: true, minValue: 1 },
  cajas: { type: "number", required: true, minValue: 1 },
  kilos: { type: "number", required: true, minValue: 1 },
});

export const AddModal = ({
  postFetchData,
  updateFetchData,
  updateData,
}: PropsAddModal) => {
  const validationSchema = createValidationSchema(
    getSchemaConfig(!!updateData)
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
      proveedor: "",
      orden: "",
      ingreso: "",
      estado: "",
      descripcion: "",
      observacion: "",
      uso: "",
      total: 0,
      cajas: 0,
      kilos: 0,
    },
    validationSchema,
  });

  // Actualiza los valores del formulario
  useEffect(() => {
    if (updateData) {
      setAllValues(updateData);
    } else {
      resetForm();
    }
  }, [updateData]);

  const handleSubmit = async () => {
    const isValid = await validateForm();

    if (!isValid) return;

    if (updateData) {
      // Modo edición
      // await updateFetchData(1, values);
    } else {
      // await postFetchData(values);
    }

    console.log("Operación completada:", values);

    resetForm();
  };

  return (
    <div className={style.column__container}>
      <SelectField
        textLabel="Proveedor:"
        name="proveedor"
        value={values.proveedor}
        onChange={handleChange}
        options={optionSelect}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.proveedor}
      />

      <TextBoxField
        textLabel="Orden:"
        value={values.orden || ""}
        name="orden"
        onChange={handleChange}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.orden}
      />

      <DateField
        textLabel="Ingreso:"
        direction="row"
        labelWidth="80px"
        name="ingreso"
        value={values.ingreso}
        onChange={handleChange}
        errorMessage={errors.ingreso}
      />

      <SelectField
        textLabel="Estado:"
        name={"estado"}
        value={values.estado}
        onChange={handleChange}
        options={optionEstado}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.estado}
      />

      <TextBoxField
        textLabel="Descripción:"
        value={values.descripcion || ""}
        name="descripcion"
        onChange={handleChange}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.descripcion}
      />

      <SelectField
        textLabel="Observación:"
        name={"observacion"}
        value={values.observacion}
        onChange={handleChange}
        options={optionObservacion}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.observacion}
      />

      <SelectField
        textLabel="Uso:"
        name={"uso"}
        value={values.uso}
        onChange={handleChange}
        options={optionUso}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.uso}
      />

      <div className={style.two__container}>
        <TextBoxField
          textLabel="Total:"
          value={values.total || ""}
          name="total"
          onChange={handleChange}
          direction="row"
          labelWidth="80px"
          errorMessage={errors.total}
          type="number"
        />
        <TextBoxField
          textLabel="Cajas:"
          value={values.cajas || ""}
          name="cajas"
          onChange={handleChange}
          direction="row"
          labelWidth="80px"
          errorMessage={errors.cajas}
          type="number"
        />
      </div>
      <TextBoxField
        textLabel="Kilos:"
        value={values.kilos || ""}
        name="kilos"
        onChange={handleChange}
        direction="row"
        labelWidth="80px"
        errorMessage={errors.kilos}
        type="number"
      />

      {postFetchData && (
        <div>
          <Button
            className="p-button-sm p-button-info mr-2"
            onClick={handleSubmit}
          >
            GUARDAR
          </Button>
        </div>
      )}

      {updateFetchData && (
        <div>
          <Button
            className="p-button-sm p-button-info mr-2"
            onClick={handleSubmit}
          >
            GUARDAR
          </Button>
        </div>
      )}
    </div>
  );
};

const optionSelect = [
  { name: "Proveedor 1", value: "proveedor1" },
  { name: "Proveedor 2", value: "proveedor2" },
  { name: "Proveedor 3", value: "proveedor3" },
  { name: "Proveedor 4", value: "proveedor4" },
  { name: "Proveedor 5", value: "proveedor5" },
];

const optionEstado = [
  { name: "Producción", value: "produccion" },
  { name: "Tránsito", value: "transito" },
];

const optionObservacion = [
  { name: "Reposición", value: "reposicion" },
  { name: "Nuevo", value: "nuevo" },
  { name: "Nuevo/Reposición", value: "nuevo-reposicion" },
];

const optionUso = [
  { name: "Dama", value: "dama" },
  { name: "Caballero", value: "caballero" },
  { name: "Dama/Caballero", value: "dama-caballero" },
];
