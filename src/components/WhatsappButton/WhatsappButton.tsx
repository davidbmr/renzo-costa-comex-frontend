import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsappButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleClick} 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25D366', // Color verde de WhatsApp
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1ebe54';
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#25D366';
      }}
    >
      <FaWhatsapp style={{ marginRight: '8px' }} />
      Iniciar chat
    </button>
  );
};

export default WhatsappButton;
