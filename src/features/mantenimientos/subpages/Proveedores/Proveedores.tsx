import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Ícono para el botón de volver
import styles from "./Proveedores.module.css";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { ProveedorNuevo } from "./components/ProveedorNuevo/ProveedorNuevo";
import GenerateExcelButton from "@/components/GenerateExcelButton/GenerateExcelButton"; // Componente para exportar Excel

const Proveedores = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]); // Estado para los datos dinámicos

  // Configuración del mapeo para el Excel
  const mapping = {
    codigoProveedor: "Código del Proveedor",
    nombreProveedor: "Nombre del Proveedor",
    descripcionArticulo: "Descripción del Artículo",
    cantidad: "Cantidad",
    precioUnidad: "Precio por Unidad",
    almacen: "Almacén",
    total: "Total",
    cuentaMayor: "Cuenta de Mayor",
  };

  // Generador de datos aleatorios
  const generateRandomData = (numItems = 50) => {
    const nombresProveedores = ["Proveedor A", "Proveedor B", "Proveedor C", "Proveedor D"];
    const descripciones = [
      "Casaca CC D19 65395/6",
      "Pantalón Sport 4521",
      "Camisa Elegante 1234",
      "Zapatos Casual 8954",
    ];
    const almacenes = ["Tránsito", "Central", "Principal", "Almacén Secundario"];
    const cuentaMayores = ["2011120", "2011130", "2011150", "2011160"];

    return Array.from({ length: numItems }, (_, index) => {
      const cantidad = Math.floor(Math.random() * 100) + 1;
      const precioUnidad = Math.floor(Math.random() * 90) + 10;
      const total = cantidad * precioUnidad;

      return {
        codigoProveedor: `PRV${String(index + 1).padStart(3, "0")}`,
        nombreProveedor: nombresProveedores[Math.floor(Math.random() * nombresProveedores.length)],
        descripcionArticulo: descripciones[Math.floor(Math.random() * descripciones.length)],
        cantidad,
        precioUnidad: `US$${precioUnidad.toFixed(2)}`,
        descuento: Math.random() > 0.5 ? Math.floor(Math.random() * 20) : 0,
        indicadorImpuestos: "IGV_INA",
        almacen: almacenes[Math.floor(Math.random() * almacenes.length)],
        total: `US$${total.toFixed(2)}`,
        cuentaMayor: cuentaMayores[Math.floor(Math.random() * cuentaMayores.length)],
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
              sheetName="Proveedores"
            />
          </div>

          {/* Tabla de proveedores */}
          <DataTable
            columns={columns || []}
            data={data || []}
            isHeaderActive={false}
          />
        </div>
      ) : (
        <ProveedorNuevo onBack={() => setShowForm(false)} />
      )}
    </MainContentStructure>
  );
};

const columns = [
  { nombre: "Código del proveedor", campo: "codigoProveedor" },
  { nombre: "Nombre del proveedor", campo: "nombreProveedor" },
  { nombre: "Descripción del artículo", campo: "descripcionArticulo" },
  { nombre: "Cantidad", campo: "cantidad" },
  { nombre: "Precio por unidad", campo: "precioUnidad" },
  { nombre: "Almacén", campo: "almacen" },
  { nombre: "Total", campo: "total" },
  { nombre: "Cuenta de mayor", campo: "cuentaMayor" },
];

export default Proveedores;
