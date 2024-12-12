import React, { useState } from "react";
import styles from "./ProveedorNuevo.module.css";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { Button } from "primereact/button";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
export const ProveedorNuevo = ({ onBack }) => {
    const [formData, setFormData] = useState({
        proveedor: "",
        encargado: "",
        direccion1: "",
        direccion2: "",
        distrito: "",
        ciudad: "",
        estado: "",
        zip: "",
        pais: "",
        identificacion: "",
        telefono: "",
        movil: "",
        email: "",
        sitioWeb: "",
        etiquetas: "",
        nota: "",
    });

    const [notas, setNotas] = useState([]);

    const encargadosOptions = [
        { name: "Juan Pérez", value: "Juan Pérez" },
        { name: "Gabriel Martínez", value: "Gabriel Martínez" },
        { name: "María López", value: "María López" },
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
            author: formData.encargado || "Desconocido",
        };

        setNotas((prevNotas) => [newNote, ...prevNotas]);
        setFormData((prev) => ({ ...prev, nota: "" })); // Limpia el input de notas
    };

    return (
        <div className={styles.container}>
        
            <div className={styles.content}>
                <div className={styles.formContainer}>
                  <div className={styles.columsContainer}>
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
                            textLabel="Dirección 1"
                            value={formData.direccion1}
                            name="direccion1"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Dirección 2"
                            value={formData.direccion2}
                            name="direccion2"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Distrito"
                            value={formData.distrito}
                            name="distrito"
                            onChange={handleChange}
                        />
                        <div className={styles.row}>
                            <TextBoxField
                                textLabel="Ciudad"
                                value={formData.ciudad}
                                name="ciudad"
                                onChange={handleChange}
                            />
                            <TextBoxField
                                textLabel="Estado"
                                value={formData.estado}
                                name="estado"
                                onChange={handleChange}
                            />
                            <TextBoxField
                                textLabel="ZIP"
                                value={formData.zip}
                                name="zip"
                                onChange={handleChange}
                            />
                        </div>
                        <SelectField
                            textLabel="País"
                            value={formData.pais}
                            name="pais"
                            options={[
                                { name: "Perú", value: "PE" },
                                { name: "México", value: "MX" },
                                { name: "Estados Unidos", value: "US" },
                            ]}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextBoxField
                            textLabel="Número de identificación"
                            value={formData.identificacion}
                            name="identificacion"
                            onChange={handleChange}
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
                            textLabel="Teléfono"
                            value={formData.telefono}
                            name="telefono"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Móvil"
                            value={formData.movil}
                            name="movil"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Correo electrónico"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Sitio Web"
                            value={formData.sitioWeb}
                            name="sitioWeb"
                            onChange={handleChange}
                        />
                        <TextBoxField
                            textLabel="Etiquetas"
                            value={formData.etiquetas}
                            name="etiquetas"
                            onChange={handleChange}
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
                                <img
                                    src={nota.avatar}
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                                <div>
                                    <p className={styles.activityName}>{nota.author}</p>
                                    <p className={styles.activityDescription}>
                                        {nota.text}
                                    </p>
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
                        <button
                            className={styles.iconButton}
                            onClick={handleAddNote}
                        >
                            <FaPaperPlane size={20} />
                        </button>
                    </div>
                </div>
            </div>
         
        </div>
    );
};
