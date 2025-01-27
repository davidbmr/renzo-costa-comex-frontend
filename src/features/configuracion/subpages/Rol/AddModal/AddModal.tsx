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
  updateFetchData?: any;
  initialData?: any;
  onHideModal?: any;
}

const getSchemaConfig = (isEdit: boolean): SchemaConfig => ({
  name: { type: "string", required: true },
});

export const AddModal = ({
  postFetchData,
  initialData,
  updateFetchData,
  onHideModal,
}: PropsAddModal) => {
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
    },
    validationSchema,
  });

  useEffect(() => {
    if (initialData) {
      setAllValues(initialData);
    } else {
      resetForm();
    }
  }, [initialData]);

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (isValid) {
      const dataToSend = {
        name: values.name,
      };

      if (initialData) {
        // await updateFetchData(initialData.id, dataToSend);
        console.log(dataToSend)
        onHideModal();
      } else {
        console.log(dataToSend)
        // await postFetchData(dataToSend);
        onHideModal();
      }
      // console.log("Datos enviados:", dataToSend);
    } else {
      console.error("Errores de validación:", errors);
    }
  };

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
