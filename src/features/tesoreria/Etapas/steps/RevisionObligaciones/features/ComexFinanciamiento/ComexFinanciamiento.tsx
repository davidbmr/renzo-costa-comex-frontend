import React, { useEffect, useState } from "react";
import style from "./ComexFinanciamiento.module.css";
import { useNavigate } from "react-router-dom";
import { DataTable } from "@/components/DataTable/DataTable";

export const ComexFinanciamiento = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={style.comex__container}>
				<h2 style={{ color: "#333", textTransform: "uppercase" }}>Revisión de Obligaciones</h2>

				<DataTable
					columns={columns || []}
					data={[]}
					isHeaderActive={false}
					onEye={() => navigate("/tesoreria/etapas-tesoreria")}
					onUpdate={() => {}}
				/>
			</div>
		</>
	);
};

const columns = [
  { nombre: "Banco", campo: "banco" },
  { nombre: "Número", campo: "numero" },
  { nombre: "Nombre Proveedor", campo: "proveedor" },
  { nombre: "Fecha Emisión", campo: "fecha" },
  { nombre: "Válido Hasta", campo: "valido" },
  { nombre: "Dias de Embarque", campo: "fecha" },
  { nombre: "Dólar", campo: "fecha" },
  { nombre: "Euro", campo: "fecha" },
  { nombre: "Monto a USD", campo: "fecha" },
  { nombre: "Saldo", campo: "fecha" },
  { nombre: "Estado", campo: "fecha" },
  { nombre: "1era Fecha vto", campo: "fecha" },
  { nombre: "1er Monto Vto $", campo: "fecha" },
  { nombre: "2da Fecha vto", campo: "fecha" },
  { nombre: "2do Monto Vto $", campo: "fecha" },
  { nombre: "Comisión emisión", campo: "fecha" },
  { nombre: "Comisión Liq. de Gastos", campo: "fecha" },
  { nombre: "Comisión cancelación", campo: "fecha" },
  { nombre: "Comisión Total $", campo: "fecha" },
];