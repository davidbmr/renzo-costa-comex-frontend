import React, { useState } from "react";
import style from "./AddModal.module.css";
import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { NumberBoxField } from "@/components/NumberBoxField/NumberBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

interface PropsAddModal {
  postFetchData?: any;
  OnHideModal?: any;
}

export const AddModal = ({ postFetchData, OnHideModal }: PropsAddModal) => {
  const [formData, setFormData] = useState<any>({
    nombre: "",
    tarjeta: "",
    banco: "",
    soles: undefined,
    dolar: undefined,
    ciclo: "",
    pago: "",
  });

  const [optionsBanco, setOptionsBanco] = useState<any[]>([
    { label: "BCP", value: "BCP" },
    { label: "SCOT", value: "SCOT" },
    { label: "Interbank", value: "Interbank" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    OnHideModal();
    if (postFetchData) {
      postFetchData(formData);
    }
  };

  return (
    <div className={style.modal__container}>
      <h2>Agregar nueva Tarjeta de Crédito</h2>

      <div className={style.form__container}>
        <TextBoxField
          textLabel="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextBoxField
          textLabel="Nº Tarjeta"
          name="tarjeta"
          value={formData.tarjeta}
          onChange={handleChange}
          placeholder="**** **** **** ****"
        />
        <SelectField
          textLabel="Banco"
          name="banco"
          value={formData.banco}
          options={optionsBanco}
          onChange={handleChange}
          optionLabel="label"
          optionValue="value"
        />
        <NumberBoxField
          textLabel="Soles"
          name="soles"
          value={formData.soles}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Dólar"
          name="dolar"
          value={formData.dolar}
          onChange={handleNumberChange}
        />
        <TextBoxField
          textLabel="Ciclo"
          name="ciclo"
          value={formData.ciclo}
          onChange={handleChange}
          placeholder="Ej: 26xx al 25xx"
        />
        <TextBoxField
          textLabel="Pago"
          name="pago"
          value={formData.pago}
          onChange={handleChange}
          placeholder="Ej: 15xx"
        />
      </div>

      <div className={style.button__container}>
        <Button className="p-button-sm p-button-info" onClick={handleSubmit}>
          Crear
        </Button>
      </div>
    </div>
  );
};
