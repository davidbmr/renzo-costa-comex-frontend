import React, { useEffect, useState } from "react";

import { Steps } from "primereact/steps";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { Divider } from "primereact/divider";


import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "@/store/slices/tesoreria";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SaldosIniciales } from "./steps/SaldosIniciales/SaldosIniciales";
import { RevisionCuentasPagar } from "./steps/RevisionCuentasPagar/RevisionCuentasPagar";

export const Etapas = () => {
  const { currentStep } = useAppSelector((state) => state.tesoreria);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentStep != 0) {
      dispatch(setCurrentStep(0));
    }
  }, []);

  return (
    <MainContentStructure>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          background: "var(--primary-color-app)",
          width: "fit-content",
          padding: "5px 10px",
          borderRadius: "5px",
          color: "#fff",
          fontSize: "13px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/tesoreria")}
      >
        <IoMdArrowRoundBack />
        <p>Regresar a Tesoreria</p>
      </div>
      <Steps model={items} activeIndex={currentStep} />
      <Divider />
      {currentStep == 0 && <SaldosIniciales />}
      {currentStep == 1 && <RevisionCuentasPagar />}
      {currentStep == 2 && <SaldosIniciales />}
      {currentStep == 3 && <SaldosIniciales />}

    </MainContentStructure>
  );
};

const items: any[] = [
  {
    label: "Saldos Iniciales",
  },
  {
    label: "Revisión de Cuentas Pagar",
  },
  {
    label: "Revisión de Obligaciones",
  },
  {
    label: "Pagos Iniciales y Masivos",
  }
];
