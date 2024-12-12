import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./SolicitudesPresupuesto.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { SolicitudNuevo } from "./components/SolicitudesPresupuestoNuevo";


const SolicitudesPresupuesto = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]); // Estado para los datos dinámicos

  // Configuración del mapeo para el Excel
  const mapping = {
    codigoSolicitud: "Código de la Solicitud",
    cliente: "Cliente",
    personaContacto: "Persona de Contacto",
    noReferencia: "No. de Referencia",
    moneda: "Moneda",
    estado: "Estado",
    fechaSolicitud: "Fecha de la Solicitud",
    fechaVencimiento: "Fecha de Vencimiento",
  };

  // Generador de datos aleatorios
  const generateRandomData = (numItems = 50) => {
    const clientes = ["Cliente A", "Cliente B", "Cliente C", "Cliente D"];
    const estados = ["Pendiente", "Aprobada", "Rechazada", "En Revisión"];
    const monedas = ["USD", "EUR", "PEN"];

    return Array.from({ length: numItems }, (_, index) => {
      return {
        codigoSolicitud: `SOL${String(index + 1).padStart(3, "0")}`,
        cliente: clientes[Math.floor(Math.random() * clientes.length)],
        personaContacto: `Persona ${index + 1}`,
        noReferencia: `REF-${index + 1}`,
        moneda: monedas[Math.floor(Math.random() * monedas.length)],
        estado: estados[Math.floor(Math.random() * estados.length)],
        fechaSolicitud: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
        fechaVencimiento: new Date(
          Date.now() + Math.floor(Math.random() * 1e10)
        ).toLocaleDateString(),
      };
    });
  };

  // Generar datos al cargar el componente
  useEffect(() => {
    setData(generateRandomData());
  }, []);

  return (
    <MainContentStructure>
      {showForm && (
        <button className={styles.backButton} onClick={() => setShowForm(false)}>
          <FaArrowLeft className={styles.icon} /> Volver
        </button>
      )}

      {!showForm ? (
        <div>
          {/* Botones para acciones */}
          <div className={styles.btnContainer}>
            <CustomButton
              text="Crear"
              backgroundButton="#9B1139"
              colorP="white"
              onClick={() => setShowForm(true)}
            />
            <CustomButton text="Importar" />
            <GenerateExcelButton
              data={data}
              mapping={mapping}
              sheetName="Solicitudes Presupuesto"
            />
          </div>

          {/* Tabla de solicitudes de presupuesto */}
          <DataTable
            columns={columns || []}
            data={data || []}
            isHeaderActive={false}
          />
        </div>
      ) : (
        <SolicitudNuevo onBack={() => setShowForm(false)} />
      )}
    </MainContentStructure>
  );
};


const estadoBodyTemplate = (item) => {
    const estadoClass =
      item.estado === "Aprobada"
        ? styles.tagSuccess
        : item.estado === "En Revisión"
        ? styles.tagInfo
        : item.estado === "Pendiente"
        ? styles.tagWarning
        : styles.tagDanger;
  
    return <span className={`${styles.tag} ${estadoClass}`}>{item.estado}</span>;
  };

const columns = [
  { nombre: "Código de la Solicitud", campo: "codigoSolicitud" },
  { nombre: "Cliente", campo: "cliente" },
  { nombre: "Persona de Contacto", campo: "personaContacto" },
  { nombre: "No. de Referencia", campo: "noReferencia" },
  { nombre: "Moneda", campo: "moneda" },
  {
    nombre: "Estado",
    body: estadoBodyTemplate,
  },
  { nombre: "Fecha de la Solicitud", campo: "fechaSolicitud" },
  { nombre: "Fecha de Vencimiento", campo: "fechaVencimiento" },
];

export default SolicitudesPresupuesto;
