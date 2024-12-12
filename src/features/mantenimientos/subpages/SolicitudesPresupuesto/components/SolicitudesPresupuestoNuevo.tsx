import React, { useState } from "react";
import styles from "./SolicitudNuevo.module.css";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";

import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { Button } from "primereact/button";
import PrimeCalendar from "@/primeComponents/PrimeCalendar/PrimeCalendar";

export const SolicitudNuevo = ({ onBack }) => {
  const [formData, setFormData] = useState({
    proveedor: "",
    encargado: "",
    nombre: "",
    contacto: "",
    referencia: "",
    moneda: "",
    numero: "",
    estado: "",
    fechaContabilizacion: null,
    fechaVencimiento: null,
    fechaDocumento: null,
    nota: "",
  });

  const [notas, setNotas] = useState([]);

  const encargadosOptions = [
    { name: "Gabriel Martínez", value: "Gabriel Martínez" },
    { name: "Juan Pérez", value: "Juan Pérez" },
    { name: "María López", value: "María López" },
  ];

  const monedaOptions = [
    { name: "USD", value: "USD" },
    { name: "EUR", value: "EUR" },
    { name: "PEN", value: "PEN" },
  ];

  const estadoOptions = [
    { name: "Pendiente", value: "Pendiente" },
    { name: "Aprobado", value: "Aprobado" },
    { name: "Rechazado", value: "Rechazado" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e, name) => {
    setFormData((prev) => ({ ...prev, [name]: e.value }));
  };

  const handleAddNote = () => {
    if (formData.nota.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text: formData.nota,
      timestamp: new Date(),
      avatar: "https://via.placeholder.com/40", // Placeholder para el avatar
      author: formData.encargado || "Desconocido",
    };

    setNotas((prevNotas) => [newNote, ...prevNotas]);
    setFormData((prev) => ({ ...prev, nota: "" })); // Limpia el input de notas
  };

  return (
    <div className={styles.container}>
      <h2>Solicitud / Nuevo</h2>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.columnsContainer}>
            {/* Columna Proveedor */}
            <div className={styles.column}>
              <TextBoxField
                textLabel="Proveedor"
                value={formData.proveedor}
                name="proveedor"
                onChange={handleChange}
                placeholder="Lorem Ipsum"
              />
              <TextBoxField
                textLabel="Nombre"
                value={formData.nombre}
                name="nombre"
                onChange={handleChange}
              />
              <TextBoxField
                textLabel="Persona de contacto"
                value={formData.contacto}
                name="contacto"
                onChange={handleChange}
              />
              <TextBoxField
                textLabel="No. Ref. del Creador"
                value={formData.referencia}
                name="referencia"
                onChange={handleChange}
              />
              <SelectField
                textLabel="Moneda Local"
                value={formData.moneda}
                name="moneda"
                options={monedaOptions}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* Columna Encargado */}
            <div className={styles.column}>
              <SelectField
                textLabel="Encargado"
                value={formData.encargado}
                name="encargado"
                options={encargadosOptions}
                onChange={(e) => handleChange(e)}
              />
              <TextBoxField
                textLabel="N°"
                value={formData.numero}
                name="numero"
                onChange={handleChange}
              />
              <SelectField
                textLabel="Estado"
                value={formData.estado}
                name="estado"
                options={estadoOptions}
                onChange={(e) => handleChange(e)}
              />
              <PrimeCalendar
                label="Fecha de contabilización"
                value={formData.fechaContabilizacion}
                onChange={(e) => handleDateChange(e, "fechaContabilizacion")}
              />
              <PrimeCalendar
                label="Fecha de vencimiento"
                value={formData.fechaVencimiento}
                onChange={(e) => handleDateChange(e, "fechaVencimiento")}
              />
              <PrimeCalendar
                label="Fecha del documento"
                value={formData.fechaDocumento}
                onChange={(e) => handleDateChange(e, "fechaDocumento")}
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
            <h3>Actividades</h3>
          </div>
          <div className={styles.activityList}>
            {notas.map((nota) => (
              <div className={styles.activityItem} key={nota.id}>
                <img src={nota.avatar} alt="avatar" className={styles.avatar} />
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
