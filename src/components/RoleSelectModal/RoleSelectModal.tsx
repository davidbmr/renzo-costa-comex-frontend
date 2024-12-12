import React, { useState } from 'react';
import { useAppDispatch } from "@/store/hooks";
import { setRole } from "@/store/slices/auth";
import Modal from 'react-modal';
import styles from './RoleSelectModal.module.css'; // Importamos el archivo CSS Module

// Definimos un tipo adecuado para las props del modal
interface RoleSelectModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRoleSelect: (role: string) => void;
}

const RoleSelectModal: React.FC<RoleSelectModalProps> = ({ isOpen, onRequestClose, onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const dispatch = useAppDispatch();

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      dispatch(setRole(selectedRole)); // Dispatch para establecer el rol
      onRoleSelect(selectedRole); // Llamamos a la función que se pasa como prop
      onRequestClose(); // Cerramos el modal
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Seleccionar Rol"
      className={styles.modalContent} // Clase del modal
      overlayClassName={styles.modalOverlay} // Clase para el overlay
    >
      <div className={styles.modalContainer}>
        <h2>Selecciona un Rol</h2>
        <select
          onChange={handleRoleChange}
          value={selectedRole}
          className={styles.select} // Clase para el select
        >
          <option value="">Selecciona un rol</option>
          <option value="Comex">Comex</option>
          <option value="Gestión Financiera">Gestión Financiera</option>
          <option value="Tesorería">Tesorería</option>
        </select>
        <button
          onClick={handleSubmit}
          disabled={!selectedRole}
          className={styles.submitButton} // Clase para el botón
        >
          Confirmar
        </button>
      </div>
    </Modal>
  );
};

export default RoleSelectModal;
