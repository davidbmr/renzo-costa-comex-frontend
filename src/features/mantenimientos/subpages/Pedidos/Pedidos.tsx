import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./Pedidos.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton";
import { PedidosNuevo } from "./components/PedidosNuevo";

const Pedidos = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]); // Estado para los datos dinámicos

  // Configuración del mapeo para el Excel
  const mapping = {
    codigoPedido: "Código del Pedido",
    cliente: "Cliente",
    articulo: "Artículo",
    cantidad: "Cantidad",
    precioUnidad: "Precio por Unidad",
    total: "Total",
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
    const estados = ["Pendiente", "En Proceso", "Completado", "Cancelado"];

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
              sheetName="Pedidos"
            />
          </div>

          {/* Tabla de pedidos */}
          <DataTable
            columns={columns || []}
            data={data || []}
            isHeaderActive={false}
          />
        </div>
      ) : (
      <PedidosNuevo onBack={() => setShowForm(false)} />
      )}
    </MainContentStructure>
  );
};

// Función para renderizar estado con clases de estilo
const estadoBodyTemplate = (item) => {
  const estadoClass =
    item.estado === "Completado"
      ? styles.tagSuccess
      : item.estado === "En Proceso"
      ? styles.tagInfo
      : item.estado === "Pendiente"
      ? styles.tagWarning
      : styles.tagDanger;

  return <span className={`${styles.tag} ${estadoClass}`}>{item.estado}</span>;
};

const columns = [
  { nombre: "Código del Pedido", campo: "codigoPedido" },
  { nombre: "Cliente", campo: "cliente" },
  { nombre: "Artículo", campo: "articulo" },
  { nombre: "Cantidad", campo: "cantidad" },
  { nombre: "Precio por Unidad", campo: "precioUnidad" },
  { nombre: "Total", campo: "total" },
  {
    nombre: "Estado",
    body: estadoBodyTemplate, // Usar body para personalizar estilo
  },
  { nombre: "Fecha del Pedido", campo: "fechaPedido" },
];

export default Pedidos;
