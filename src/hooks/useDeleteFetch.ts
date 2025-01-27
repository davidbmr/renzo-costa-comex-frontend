import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "@/connections/mainApi.js";
import { useAppDispatch } from "@/store/hooks";
import { setToast } from "@/store/slices/toast";

export const useDeleteFetch = (
	endPoint: string,
	sectionName: string,
	reloadFetchData?: () => void
) => {
	const dispatch = useAppDispatch();
	const [isLoadingDelete, setIsLoadingDelete] = useState(true);
	const [errorDelete, setErrorDelete] = useState<any>(null);
	const [successDelete, setSuccessDelete] = useState<boolean>(false);

	const setInitStateDelete = () => {
		setIsLoadingDelete(false);
		setErrorDelete(null);
		setSuccessDelete(false);
	};

	useEffect(() => {
		if (successDelete) {
			dispatch(
				setToast({
					severity: "success",
					summary: `${sectionName} Eliminado`,
					detail: `${sectionName} ha sido eliminado exitosamente`,
				})
			);

			setInitStateDelete();
			if (reloadFetchData) {
				reloadFetchData();
			}
		}
	}, [successDelete]);

	const deleteFetchData = async (id: string) => {
		try {
			const token = localStorage.getItem("rt__renzo__costa");
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			await axios.delete(`${url}${endPoint}/${id}`, { headers });

			setSuccessDelete(true);
			setIsLoadingDelete(false);
		} catch (error) {
			console.error(error);
			setErrorDelete(error);
			setIsLoadingDelete(false);
		}
	};

	return {
		deleteFetchData,
		isLoadingDelete,
	};
};
