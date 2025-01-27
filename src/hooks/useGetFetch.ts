import { useEffect, useState } from "react";
import api from "@/connections";
import { toast } from 'sonner';

type HookData<T> = {
  data: T[] | any;
  isLoading: boolean;
  reloadFetchData: () => Promise<void>;
};

export const useGetFetch = <T>(endPoint: string | null): HookData<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFetchData = async () => {
    if (!endPoint || endPoint.includes('null') || endPoint.includes('undefined')) {
      // Si el endpoint es inválido, no hacemos la petición
      setIsLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("rt__renzo__costa");
      const headers = {
        access_token: token,
      };

      const resp = await api.get(`${endPoint}`, { headers });
      const responseData = resp.data;

      setData(responseData);
      setIsLoading(false);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        const errorMsg = error.response.data?.msg || 'Recurso no encontrado.';
        if (endPoint !== '/servicio/getServiciosPorMesContadora/null' && endPoint !== '/servicio/getServiciosPorMesContadora/undefined') {
          toast.error(errorMsg); // Mostrar mensaje con Sonner solo si el endpoint es válido
        }
      } else {
        console.error(error);
      }
      setIsLoading(false);
    }
  };

  const reloadFetchData = async () => {
    await getFetchData();
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return {
    data,
    isLoading,
    reloadFetchData,
  };
};
