import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import styles from "./ProgramacionPago.module.css";

export const ProgramacionPago = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const generateRandomData = (numItems = 50) => {
	const empresas = ["Empresa A", "Empresa B", "Empresa C", "Empresa D"];
	const tipoEmpresas = ["Agente de Aduanas"];
	const estados = ["Tránsito", "Producción"];
	const observaciones = ["Reposición", "Nuevo", "Nuevo/Reposición"];
	const usos = ["Caballero", "Dama", "Dama/Caballero"];
	const docs = ["Doc", ""];
	const pallets = [""];

	return Array.from({ length: numItems }, (_, index) => {
		const cantidad = Math.floor(Math.random() * 100) + 1;
		const precioUnidad = Math.floor(Math.random() * 90) + 10;
		const saldoUSD = cantidad * precioUnidad;

		return {
			empresa: empresas[Math.floor(Math.random() * empresas.length)],
			tipoEmpresa: tipoEmpresas[Math.floor(Math.random() * tipoEmpresas.length)],
			factura: `F000${String(index + 1).padStart(3, "0")}`,
			referenciaEmbarque: `FOR00${String(index + 1).padStart(3, "0")}`,
			fechaDOC: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
			fechaVen: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
			saldoUSD: `US$${saldoUSD.toFixed(2)}`,
			saldoSoles: `S/ -`,
			
			estado: estados[Math.floor(Math.random() * estados.length)],
			observacion: observaciones[Math.floor(Math.random() * observaciones.length)],
			uso: usos[Math.floor(Math.random() * usos.length)],
			cantidad,
			precioUnidad: `US$${precioUnidad.toFixed(2)}`,
			eta: new Date(Date.now() - Math.floor(Math.random() * 1e10)).toLocaleDateString(),
			doc: docs[Math.floor(Math.random() * docs.length)],
			pallet: pallets[Math.floor(Math.random() * pallets.length)],
		};
	});
};

useEffect(() => {
	setData(generateRandomData());
}, []);


  return (
    <>
      <h2 style={{ color: "#333", textTransform: "uppercase" }}>
        Abonos
      </h2>
      <div className={styles.btnContainer}>
        <CustomButton
          text="Crear"
          backgroundButton="#9B1139"
          colorP="white"
          onClick={() => setShowForm(true)}
        />
        <CustomButton text="Importar" />
        {/* <GenerateExcelButton data={data} mapping={mapping} sheetName="Pedidos" /> */}
      </div>

      <DataTable
        columns={columns || []}
        data={data || []}
        isHeaderActive={false}
      />
      <ConfirmacionEtapa />
    </>
  );
};

const columns = [
  { nombre: "Empresa", campo: "empresa" },
  { nombre: "Tipo de Empresa", campo: "tipoEmpresa" },
  { nombre: "Factura", campo: "factura" },
  { nombre: "Referencia de Embarque", campo: "referenciaEmbarque" },
  { nombre: "Fecha DOC", campo: "fechaDOC" },
  { nombre: "Fecha Ven", campo: "fechaVen" },
  { nombre: "Saldo USD", campo: "saldoUSD" },
  { nombre: "Saldo Soles", campo: "saldoSoles" },
];
