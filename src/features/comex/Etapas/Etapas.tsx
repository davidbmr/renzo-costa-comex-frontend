import React, { useEffect, useState } from "react";

import { Steps } from "primereact/steps";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { Divider } from "primereact/divider";

import { OrdenCompra } from "./steps/OrdenCompra/OrdenCompra";
import { Pedido } from "./steps/Pedido/Pedido";
import { Importaciones } from "./steps/Importaciones/Importaciones";
import { PrecioEntrega } from "./steps/PrecioEntrega/PrecioEntrega";
import { DerechosAduaneros } from "./steps/DerechosAduaneros/DerechosAduaneros";
import { RegistroFactura } from "./steps/RegistroFactura/RegistroFactura";
import { ProgramacionPago } from "./steps/ProgramacionPago/ProgramacionPago";
import { Embarcacion } from "./steps/Embarcacion/Embarcacion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { CierreImportacion } from "./steps/CierreImportacion/CierreImportacion/CierreImportacion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { setCurrentStep } from "@/store/slices/comex";

export const Etapas = () => {
	const { currentStep } = useAppSelector((state) => state.comex);
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
				onClick={() => navigate("/comex")}
			>
				<IoMdArrowRoundBack />
				<p>Regresar a COMEX</p>
			</div>
			<Steps model={items} activeIndex={currentStep} />
			<Divider />
			{currentStep == 0 && <OrdenCompra />}
			{currentStep == 1 && <Pedido />}
			{currentStep == 2 && <Embarcacion />}
			{currentStep == 3 && <Importaciones />}
			{currentStep == 4 && <PrecioEntrega />}
			{currentStep == 5 && <DerechosAduaneros />}
			{currentStep == 6 && <RegistroFactura />}
			{currentStep == 7 && <ProgramacionPago />}
			{currentStep == 8 && <CierreImportacion />}
		</MainContentStructure>
	);
};

const items: any[] = [
	{
		label: "Orden de compra",
	},
	{
		label: "Pedido",
	},
	{
		label: "Embarcación",
	},
	{
		label: "Importaciones",
	},
	{
		label: "Precio de entrega",
	},
	{
		label: "Derechos aduaneros",
	},
	{
		label: "Registro de facturas",
	},
	{
		label: "Programación de pago",
	},
	{
		label: "Cierre de importación",
	},
];
