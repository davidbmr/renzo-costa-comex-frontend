import React, { useState } from "react";
import styles from "./AbonosNuevo.module.css";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { Button } from "primereact/button";

export const AbonosNuevo = ({ onBack, onCreate }:any) => {
  const [formData, setFormData] = useState({
    cliente: "",
    articulo: "",
    cantidad: "",
    precioUnidad: "",
    total: "",
    estado: "",
    fechaPedido: "",
    formaPago: "",
    direccionEntrega: "",
    metodoEnvio: "",
    nota: "",
  });

  const [notas, setNotas] = useState([]);

  const estadoOptions = [
    { name: "Pendiente", value: "Pendiente" },
    { name: "En Proceso", value: "En Proceso" },
    { name: "Completado", value: "Completado" },
    { name: "Cancelado", value: "Cancelado" },
  ];

  const metodoEnvioOptions = [
    { name: "Terrestre", value: "Terrestre" },
    { name: "Aéreo", value: "Aéreo" },
    { name: "Marítimo", value: "Marítimo" },
  ];

  const formaPagoOptions = [
    { name: "Efectivo", value: "Efectivo" },
    { name: "Tarjeta de Crédito", value: "Tarjeta de Crédito" },
    { name: "Transferencia Bancaria", value: "Transferencia Bancaria" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNote = () => {
    if (formData.nota.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: formData.nota,
      timestamp: new Date(),
      avatar: "https://via.placeholder.com/40", // Placeholder para el avatar
      author: formData.cliente || "Desconocido",
    };

    setNotas((prevNotas) => [newNote, ...prevNotas]);
    setFormData((prev) => ({ ...prev, nota: "" })); // Limpia el input de notas
  };

  const handleCreate = () => {
    if (onCreate) {
      onCreate(formData);
    }
    onBack();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.columsContainer}>
            {/* Columna Información del Pedido */}
            <div className={styles.column}>
              <TextBoxField
                textLabel="Empresa"
                value={formData.cliente}
                name="cliente"
                onChange={handleChange}
                placeholder="Nombre del cliente"
              />
              <SelectField
              textLabel="Tipo de Empresa"
              name=""
              value={""}
              onChange={()=>""}
              options={[]}
              />
              <TextBoxField
                textLabel="Factura"
                value={formData.articulo}
                name="articulo"
                onChange={handleChange}
                placeholder="F0001-0001"
              />
              <TextBoxField
                textLabel="Referencia de Embarque"
                value={formData.cantidad}
                name="cantidad"
                onChange={handleChange}
              />
              <TextBoxField
                textLabel="Fecha DOC"
                value={formData.fechaPedido}
                name="fechaPedido"
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
              <TextBoxField
                textLabel="Fecha Ven"
                value={formData.fechaPedido}
                name="fechaPedido"
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
              <TextBoxField
                textLabel="Precio por Unidad"
                value={formData.precioUnidad}
                name="precioUnidad"
                onChange={handleChange}
              />
              <TextBoxField
                textLabel="Total"
                value={formData.total}
                name="total"
                onChange={handleChange}
              />
            </div>
            {/* Columna Detalles del Pedido */}
            <div className={styles.column}>
              <SelectField
                textLabel="Estado"
                value={formData.estado}
                name="estado"
                options={estadoOptions}
                onChange={(e) => handleChange(e)}
              />
              <TextBoxField
                textLabel="Fecha del Pedido"
                value={formData.fechaPedido}
                name="fechaPedido"
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
              <TextBoxField
                textLabel="Dirección de Entrega"
                value={formData.direccionEntrega}
                name="direccionEntrega"
                onChange={handleChange}
              />
              <SelectField
                textLabel="Método de Envío"
                value={formData.metodoEnvio}
                name="metodoEnvio"
                options={metodoEnvioOptions}
                onChange={(e) => handleChange(e)}
              />
              <SelectField
                textLabel="Forma de Pago"
                value={formData.formaPago}
                name="formaPago"
                options={formaPagoOptions}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        {/* Footer */}
        <div className={styles.footer}>
            <button
              className={styles.primaryButton}
              onClick={() => console.log("Crear solicitud")}
            >
              Crear
            </button>
            <button
              className={styles.secondaryButton}
              onClick={onBack}
              style={{ backgroundColor: "#3232", color: "black" }}
            >
              Cancelar
            </button>
          </div>
        </div>

        {/* Columna de actividades */}
        <div className={styles.activityContainer}>
          <div className={styles.activityHeader}>
            <h3>Actividad</h3>
          </div>
          <div className={styles.activityList}>
            {notas.map((nota) => (
              <div className={styles.activityItem} key={nota.id}>
                <img
                  src={nota.avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.activityName}>{nota.author}</p>
                  <p className={styles.activityDescription}>{nota.text}</p>
                  <p className={styles.timestamp}>
                    {nota.timestamp.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.noteContainer}>
            <TextBoxField
              textLabel=""
              placeholder="Agregar una nota..."
              value={formData.nota}
              name="nota"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  nota: e.target.value,
                }))
              }
            />
            <button
              className={styles.iconButton}
              onClick={() => console.log("Adjuntar archivo")}
            >
              <FaPaperclip size={20} />
            </button>
            <button className={styles.iconButton} onClick={handleAddNote}>
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>

     
      </div>
    </div>
  );
};
