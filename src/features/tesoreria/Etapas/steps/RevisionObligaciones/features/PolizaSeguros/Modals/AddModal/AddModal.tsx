import React, { useState } from "react";
import style from "./AddModal.module.css";
import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { NumberBoxField } from "@/components/NumberBoxField/NumberBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

interface PropsAddModal {
  postFetchData?: any;
  OnHideModal?:any;
}

export const AddModal = ({ postFetchData,OnHideModal }: PropsAddModal) => {
  const [formData, setFormData] = useState<any>({
    seguros: "",
    proveedor: "",
    soles: undefined,
    dolares: undefined,
    numCuotas: undefined,
    cuotas: undefined,
    cuotasCanceladas: undefined,
    saldo: undefined,
    numCuotasCanceladas: undefined,
  });

  const [optionsProveedor, setOptionsProveedor] = useState<any[]>([]);
  const [newProveedor, setNewProveedor] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProveedor = () => {
    if (newProveedor.trim()) {
      setOptionsProveedor([
        ...optionsProveedor,
        { label: newProveedor, value: newProveedor },
      ]);
      setNewProveedor("");
    }
  };

  const handleSubmit = () => {
	OnHideModal()
    if (postFetchData) {
      postFetchData(formData);
    }
  };

  return (
    <div className={style.modal__container}>
   

      <div className={style.form__container}>
        <TextBoxField
          textLabel="Seguro"
          name="seguros"
          value={formData.seguros}
          onChange={handleChange}
        />
        <SelectField
          textLabel="Proveedor"
          name="proveedor"
          value={formData.proveedor}
          options={proveedores}
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
          textLabel="Dólares"
          name="dolares"
          value={formData.dolares}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Nº Cuotas"
          name="numCuotas"
          value={formData.numCuotas}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Cuotas"
          name="cuotas"
          value={formData.cuotas}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Cuotas canceladas"
          name="cuotasCanceladas"
          value={formData.cuotasCanceladas}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Saldo"
          name="saldo"
          value={formData.saldo}
          onChange={handleNumberChange}
        />
        <NumberBoxField
          textLabel="Nº Cuotas Canceladas"
          name="numCuotasCanceladas"
          value={formData.numCuotasCanceladas}
          onChange={handleNumberChange}
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

const proveedores = [
  { label: "Proveedor A", value: "proveedor_a" },
  { label: "Proveedor B", value: "proveedor_b" },
  { label: "Proveedor C", value: "proveedor_c" },
  { label: "Proveedor D", value: "proveedor_d" },
  { label: "Proveedor E", value: "proveedor_e" },
];
