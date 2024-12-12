import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import axios from "axios";
import style from "./ReclamoModal.module.css"; // Crea un archivo CSS según tus necesidades
import { url } from "@/connections/mainApi";

const ReclamoModal = ({ isOpen, onClose, clienteId }) => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState(""); // Para almacenar la razón personalizada

  // Opciones de reclamo predefinidas
  const reasons = [
    "La Contadora no asistió a la reunión",
    "El servicio fue incompleto",
    "Hubo problemas con la facturación",
    "Falta de comunicación",
    "Otra Razón"
  ];

  // Maneja el envío del reclamo
  const handleSendReclamo = async () => {
    const razon = selectedReason === "Otra Razón" ? otherReason : selectedReason;
    
    if (!razon) {
      console.error("Debe seleccionar o ingresar una razón para el reclamo.");
      return;
    }

    try {
      await axios.post(`${url}reclamo/reclamos`, {
        clienteId,
        razon,
      });

      console.log("Reclamo enviado exitosamente.");
      onClose(); // Cerrar el modal después del envío
    } catch (error) {
      console.error("Error al enviar el reclamo:", error);
    }
  };

  return (
    <Dialog
      visible={isOpen}
      onHide={onClose}
      header="Realizar un Reclamo"
      footer={() => (
        <Button
          label="Enviar Reclamo"
          icon="pi pi-send"
          onClick={handleSendReclamo}
          className="p-button-primary"
        />
      )}
      style={{ width: "450px" }}
    >
      <div className={style.reclamoModal}>
        {/* Renderizar los radio buttons */}
        {reasons.map((reason, idx) => (
          <div key={idx} className={style.reasonOption}>
            <RadioButton
              inputId={`reason${idx}`}
              name="razon"
              value={reason}
              checked={selectedReason === reason}
              onChange={(e) => setSelectedReason(e.value)}
            />
            <label htmlFor={`reason${idx}`} className={style.reasonLabel}>
              {reason}
            </label>
          </div>
        ))}

        {/* Si el usuario selecciona "Otra Razón", mostrar el campo de texto */}
        {selectedReason === "Otra Razón" && (
          <div className={style.otherReasonContainer}>
            <InputTextarea
              value={otherReason}
              onChange={(e) => setOtherReason(e.target.value)}
              rows={4}
              placeholder="Escribe la razón del reclamo"
              className="p-inputtextarea"
            />
          </div>
        )}
      </div>
    </Dialog>
  );
};

export default ReclamoModal;
