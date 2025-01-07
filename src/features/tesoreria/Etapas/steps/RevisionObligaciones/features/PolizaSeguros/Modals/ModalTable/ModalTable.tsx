import React from "react";
import style from "./ModalTable.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { Button } from "primereact/button";
import { FaDollarSign, FaCoins } from "react-icons/fa";
import { Divider } from "primereact/divider";

interface PropsModalTables {
  seguro: string;
  OnHideModal: () => void;
}

export const ModalTables = ({ seguro, OnHideModal }: PropsModalTables) => {
  const multAndOncoColumns = [
    { nombre: "Personal Asegurado", campo: "asegurado" },
    { nombre: "Multisalud", campo: "multisalud" },
    { nombre: "Oncológico", campo: "oncologico" },
  ];

  const multAndOncoData = [
    { asegurado: "Adriana Brenneisen", multisalud: "-", oncologico: "-" },
    { asegurado: "Jose Cabanillas", multisalud: "-", oncologico: "-" },
    { asegurado: "Juan Farrel", multisalud: "-", oncologico: "-" },
  ];

  const oncoRosaColumns = [
    { nombre: "Mes", campo: "mes" },
    { nombre: "Soles", campo: "soles" },
    { nombre: "Dólar", campo: "dolar" },
  ];

  const oncoRosaData = [
    { mes: "Oct-24", soles: 615.2, dolar: 3556.3 },
    { mes: "Nov-24", soles: 615.2, dolar: 3556.3 },
    { mes: "Dic-24", soles: 615.2, dolar: 3556.3 },
  ];

  const convenioColumns = [
    { nombre: "Cuota", campo: "cuota" },
    { nombre: "VTO", campo: "vto" },
    { nombre: "Monto $", campo: "monto" },
  ];

  const convenioData = [
    { cuota: 1, vto: "30-10-24", monto: 3556.3 },
    { cuota: 2, vto: "30-11-24", monto: 3556.3 },
    { cuota: 3, vto: "30-12-24", monto: 3556.3 },
  ];

  const formatNumber = (number) => {
    return number.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const getTableConfig = () => {
    switch (seguro) {
      case "mult":
      case "onco person":
        return { columns: multAndOncoColumns, data: multAndOncoData, totals: null };
      case "onco-rosa":
        const totalDolarOnco = oncoRosaData.reduce((sum, item) => sum + item.dolar, 0);
        const totalSolesOnco = oncoRosaData.reduce((sum, item) => sum + item.soles, 0);
        return {
          columns: oncoRosaColumns,
          data: oncoRosaData,
          totals: { dolar: totalDolarOnco, soles: totalSolesOnco },
        };
      case "glob":
        const totalMontoConvenio = convenioData.reduce((sum, item) => sum + item.monto, 0);
        return { columns: convenioColumns, data: convenioData, totals: { dolar: totalMontoConvenio } };
      default:
        return { columns: [], data: [], totals: null };
    }
  };

  const { columns, data, totals } = getTableConfig();

  const renderTotals = () => {
    if (!totals) return null;

    if (totals.soles !== undefined && totals.dolar !== undefined) {
      // Caso: Dos totales (dólares y soles)
      return (
        <div className={style.totalContainer}>
          <div className={style.totalBlock}>
            <div className={style.totalItem}>
              <FaDollarSign className={style.icon} />
              <div>
                <p className={style.label}>Total en Dólares</p>
                <span className={style.value}>{`$ ${formatNumber(totals.dolar)}`}</span>
              </div>
            </div>
            <Divider layout="vertical" />
            <div className={style.totalItem}>
              <FaCoins className={style.icon} />
              <div>
                <p className={style.label}>Total en Soles</p>
                <span className={style.value}>{`S/ ${formatNumber(totals.soles)}`}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (totals.dolar !== undefined) {
      // Caso: Un solo total (dólares)
      return (
        <div className={style.totalContainer}>
          <div className={style.totalBlock}>
            <div className={style.totalItem}>
              <FaDollarSign className={style.icon} />
              <div>
                <p className={style.label}>Total</p>
                <span className={style.value}>{`$ ${formatNumber(totals.dolar)}`}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={style.modal__container}>
      <h2>
        {seguro === "onco person" || seguro === "mult"
          ? "Póliza Multisalud y Oncológica Pacífico"
          : seguro === "onco-rosa"
          ? ""
          : "Convenio de Pago Póliza Global"}
      </h2>

      <DataTable columns={columns} data={data} isHeaderActive={false} children={renderTotals()} />

    
    </div>
  );
};
