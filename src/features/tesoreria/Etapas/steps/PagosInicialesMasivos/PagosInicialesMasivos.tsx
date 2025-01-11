import React, { useEffect, useState } from "react";
import styles from "./PagosInicialesMasivos.module.css";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { SelectField } from "@/components/SelectField/SelectField";
import { useModal } from "@/hooks/useModal";
import { CheckBoxField } from "@/components/CheckBoxField/CheckBoxField";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";

export const PagosInicialesMasivos = () => {
  const addModal = useModal();

  return (
    <>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Parámetros de Filtrado
      </h2>
      <br />
      <div className={styles.date__container}>
        <CheckBoxField
          textLabel="Generar Pago:"
          name="tipoPago"
          value={false}
          onChange={() => ""}
          reverseDirection
          direction="row"
        />
        <CheckBoxField
          textLabel="Generar Archivo TXT:"
          name="tipoPago"
          value={false}
          onChange={() => ""}
          reverseDirection
          direction="row"
        />
        <CheckBoxField
          textLabel="Actualizar Referencias de Pagos:"
          name="tipoPago"
          value={false}
          onChange={() => ""}
          reverseDirection
          direction="row"
        />
        <CheckBoxField
          textLabel="Eliminar Pre-selección:"
          name="tipoPago"
          value={false}
          onChange={() => ""}
          reverseDirection
          direction="row"
        />
        <SelectField
          textLabel="Tipo de Pago:"
          name="tipoPago"
          options={optionTipoPago}
          value={""}
          onChange={() => ""}
          direction="row"
          labelWidth="140px"
        />
        <SelectField
          textLabel="Método de Pago:"
          name="tipoPago"
          options={optionTipoPago}
          value={""}
          onChange={() => ""}
          direction="row"
          labelWidth="140px"
        />
        <TextBoxField
          textLabel="Descripción de pago:"
          value={""}
          name="numeroComprobante"
          onChange={() => ""}
          direction="row"
          labelWidth="140px"
        />
        <CustomButton text="Buscar" backgroundButton="#9B1139" colorP="white" />
      </div>

      <ConfirmacionEtapa />
    </>
  );
};

const optionTipoPago = [{ name: "Proveedores", value: "proveedor1" }];
