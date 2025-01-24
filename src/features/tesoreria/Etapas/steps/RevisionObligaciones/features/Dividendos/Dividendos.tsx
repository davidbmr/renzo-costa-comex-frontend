import React, { useState } from "react";
import styles from "./Dividendos.module.css";
import { DataTable } from "@/components/DataTable/DataTable";
import { Button } from "primereact/button";
import { FaDollarSign, FaCoins, FaBan } from "react-icons/fa";
import { Divider } from "primereact/divider";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { InputText } from "primereact/inputtext";

export const Dividendos = () => {
  const [columnsState, setColumnsState] = useState({
    JFBM: true,
    MBM: true,
    RCB: true,
    JCL: true,
  });

  const [dividendos, setDividendos] = useState([
    {
      fecha: "22-Feb",
      JFBM: 2698256.0,
      MBM: 7372282.0,
      RCB: 2698256.0,
      JCL: 635357.0,
    },
    {
      fecha: "11-Mar",
      JFBM: 577000.0,
      MBM: 1260000.0,
      RCB: 1281000.0,
      JCL: 290000.0,
    },
    {
      fecha: "31-May",
      JFBM: 0.0,
      MBM: 223854.0,
      RCB: 313589.15,
      JCL: 223854.0,
    },
    { fecha: "18-Jun", JFBM: 0.0, MBM: 1058489.0, RCB: 0.0, JCL: 0.0 },
    { fecha: "11-Jul", JFBM: 377070.0, MBM: 60000.0, RCB: 0.0, JCL: 0.0 },
    { fecha: "22-Jul", JFBM: 185745.0, MBM: 60000.0, RCB: 0.0, JCL: 0.0 },
    {
      fecha: "26-Ago",
      JFBM: 380000.0,
      MBM: 380000.0,
      RCB: 380000.0,
      JCL: 380000.0,
    },
    {
      fecha: "25-Set",
      JFBM: 380000.0,
      MBM: 380000.0,
      RCB: 380000.0,
      JCL: 380000.0,
    },
  ]);

  const [totalsState, setTotalsState] = useState({
    JFBM: true,
    MBM: true,
    RCB: true,
    JCL: true,
  });

  const toggleTotalState = (column) => {
    setTotalsState((prevState) => ({
      ...prevState,
      [column]: !prevState[column],
    }));
  };

  const calculateTotals = (field) =>
    dividendos.reduce(
      (sum, item) => sum + (columnsState[field] ? item[field] : 0),
      0
    );

  const totalJFBM = calculateTotals("JFBM");
  const totalMBM = calculateTotals("MBM");
  const totalRCB = calculateTotals("RCB");
  const totalJCL = calculateTotals("JCL");

  const columns = [
    { nombre: "DIVIDENDO", campo: "fecha" },
    { nombre: "JFBM", campo: "JFBM" },
    { nombre: "MBM", campo: "MBM" },
    { nombre: "RCB", campo: "RCB" },
    { nombre: "JCL", campo: "JCL" },
  ];

  const formatNumber = (number) =>
    number.toLocaleString("es-PE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const mapping = {
    DIVIDENDO: "DIVIDENDO",
    JFBM: "JFBM",
    MBM: "MBM",
    RCB: "RCB",
    JCL: "JCL",
  };

  return (
    <div className={styles.container}>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Tabla de Dividendos
      </h2>

      <div className={styles.btnContainer}>
        <div className={styles.btnContent}>
          <CustomButton
            text="CREAR"
            backgroundButton="var(--primary-color-app)"
            colorP="white"
          />
          <CustomButton text="IMPORTAR" />
          <GenerateExcelButton
            data={dividendos}
            mapping={mapping}
            sheetName="SaldosIniciales"
          />
        </div>

        <div className="flex justify-content-end">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" placeholder="Buscar..." />
          </span>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={dividendos}
        isHeaderActive={false}
        children={
          <div className={styles.totalContainer}>
            <div className={styles.totalBlock}>
              <div className={styles.totalItem}>
                <FaDollarSign className={styles.icon} />
                <div className={styles.totalContent}>
                  <p className={styles.label}>Total JFBM</p>
                  <span className={styles.value}>{`$ ${formatNumber(
                    totalJFBM
                  )}`}</span>
                  {!totalsState.JFBM && (
                    <p className={styles.cancelledText}>Cancelado</p>
                  )}
                </div>
                {totalsState.JFBM && (
                  <Button
                    icon={<FaBan />}
                    className="p-button-danger p-button-sm"
                    onClick={() => toggleTotalState("JFBM")}
                  />
                )}
              </div>
              <Divider layout="vertical" />
              <div className={styles.totalItem}>
                <FaDollarSign className={styles.icon} />
                <div className={styles.totalContent}>
                  <p className={styles.label}>Total MBM</p>
                  <span className={styles.value}>{`$ ${formatNumber(
                    totalMBM
                  )}`}</span>
                  {!totalsState.MBM && (
                    <p className={styles.cancelledText}>Cancelado</p>
                  )}
                </div>
                {totalsState.MBM && (
                  <Button
                    icon={<FaBan />}
                    className="p-button-danger p-button-sm"
                    onClick={() => toggleTotalState("MBM")}
                  />
                )}
              </div>
              <Divider layout="vertical" />
              <div className={styles.totalItem}>
                <FaCoins className={styles.icon} />
                <div className={styles.totalContent}>
                  <p className={styles.label}>Total RCB</p>
                  <span className={styles.value}>{`$ ${formatNumber(
                    totalRCB
                  )}`}</span>
                  {!totalsState.RCB && (
                    <p className={styles.cancelledText}>Cancelado</p>
                  )}
                </div>
                {totalsState.RCB && (
                  <Button
                    icon={<FaBan />}
                    className="p-button-danger p-button-sm"
                    onClick={() => toggleTotalState("RCB")}
                  />
                )}
              </div>
              <Divider layout="vertical" />
              <div className={styles.totalItem}>
                <FaCoins className={styles.icon} />
                <div className={styles.totalContent}>
                  <p className={styles.label}>Total JCL</p>
                  <span className={styles.value}>{`$ ${formatNumber(
                    totalJCL
                  )}`}</span>
                  {!totalsState.JCL && (
                    <p className={styles.cancelledText}>Cancelado</p>
                  )}
                </div>
                {totalsState.JCL && (
                  <Button
                    icon={<FaBan />}
                    className="p-button-danger p-button-sm"
                    onClick={() => toggleTotalState("JCL")}
                  />
                )}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
