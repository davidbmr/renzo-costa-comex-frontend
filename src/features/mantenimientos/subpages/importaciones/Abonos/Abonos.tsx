import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./Abonos.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { AbonosNuevo } from "./components/AbonosNuevo";


export const Abonos = () => {
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState([]); // Estado para los datos dinámicos
  
   // Configuración del mapeo para el Excel
  const mapping = {
    empresa: "Empresa",
    tipoEmpresa: "Tipo de Empresa",
    factura: "Factura",
    referenciaEmbarque: "Referencia de Embarque",
    fechaDoc: "Fecha Doc",
    fechaVen: "Fecha de Ven",
    saldoUSD:"Saldo USD",
    estado: "Estado",
    fechaPedido: "Fecha del Pedido",
  };

  // Generador de datos aleatorios
  const generateRandomData = (numItems = 50) => {
    const clientes = ["Cliente A", "Cliente B", "Cliente C", "Cliente D"];
    const articulos = [
      "Producto 1",
      "Producto 2",
      "Producto 3",
      "Producto 4",
    ];
    const estados = ["Pendiente", "Abonado"];

    return Array.from({ length: numItems }, (_, index) => {
      const cantidad = Math.floor(Math.random() * 100) + 1;
      const precioUnidad = Math.floor(Math.random() * 90) + 10;
      const total = cantidad * precioUnidad;

      return {
        codigoPedido: `PED${String(index + 1).padStart(3, "0")}`,
        cliente: clientes[Math.floor(Math.random() * clientes.length)],
        articulo: articulos[Math.floor(Math.random() * articulos.length)],
        cantidad,
        precioUnidad: `US$${precioUnidad.toFixed(2)}`,
        total: `US$${total.toFixed(2)}`,
        estado: estados[Math.floor(Math.random() * estados.length)],
        fechaPedido: new Date(
          Date.now() - Math.floor(Math.random() * 1e10)
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
              sheetName="Abonos"
            />
          </div>

          {/* Tabla de abonos */}
          <DataTable
            columns={columns || []}
            data={data || []}
            isHeaderActive={false}
          />
        </div>
      ) : (
      <AbonosNuevo onBack={() => setShowForm(false)} />
      )}
    </MainContentStructure>
  )
}

// Función para renderizar estado con clases de estilo
const estadoBodyTemplate = (item) => {
    const estadoClass =
      item.estado === "Abonado"
        ? styles.tagSuccess
        : styles.tagDanger;
  
    return <span className={`${styles.tag} ${estadoClass}`}>{item.estado}</span>;
  };
  
  const columns = [
    { nombre: "Empresa", campo: "empresa" },
    { nombre: "Tipo de Empresa", campo: "tipoEmpresa" },
    { nombre: "Factura", campo: "factura" },
    { nombre: "Referencia de Embarque", campo: "referenciaEmbarque" },
    { nombre: "Fecha DOC", campo: "fechaDoc" },
    { nombre: "Fecha Ven", campo: "fechaVen" },
    { nombre: "Saldo USD", campo: "saldoUSD" },
    { nombre: "Saldo Soles", campo: "saldoSoles" },
    { nombre: "Remarks", campo: "remarks" },
    { nombre: "Detracción o retención", campo: "detraccionRetencion" },
    { nombre: "Invoice base USD", campo: "invoiceBaseUSD" },
    { nombre: "Invoice base S/.", campo: "invoiceBaseS" },
    { nombre: "Monto a pagar", campo: "montoPagar" },
    {
      nombre: "Estado",
      body: estadoBodyTemplate, // Usar body para personalizar estilo
    },
    { nombre: "Observaciones", campo: "observaciones" },
  ];