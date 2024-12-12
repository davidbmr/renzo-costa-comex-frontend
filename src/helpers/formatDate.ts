export const formatSoloFecha = (fechaCompleta?: string): string => {
    if (!fechaCompleta || typeof fechaCompleta !== 'string') {
      return ''; // Devuelve una cadena vacía si no hay fecha o el tipo no es correcto
    }
  
    const [fecha] = fechaCompleta.split(',');
    return fecha ? fecha.trim() : ''; // Devuelve la fecha sin la hora, si existe
  };
  

  export const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
  };
  