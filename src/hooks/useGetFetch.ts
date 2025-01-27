import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "@/connections/mainApi"; // URL base desde connections

interface UseGetFetchOptions {
	headers?: Record<string, any>;
	params?: Record<string, any>;
}

interface UseGetFetchResult {
	data: any;
	isLoading: boolean;
	error: any;
	reloadFetchData: () => Promise<void>;
}

export const useGetFetch = (
	endpoint: string,
	options?: UseGetFetchOptions
): UseGetFetchResult => {
	const [data, setData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<any>(null);

	const fetchData = async () => {
		setIsLoading(true);
		setError(null);

		try {
		
			const fullUrl = `${url}${endpoint}`;

			const response = await axios.get(fullUrl, {
				headers: options?.headers,
				params: options?.params,
			});

			setData(response.data); 
		} catch (err) {
			setError(err); 
			console.error("Error fetching data:", err);
		} finally {
			setIsLoading(false); 
		}
	};

	
	const reloadFetchData = async () => {
		await fetchData();
	};


	useEffect(() => {
		fetchData();
	}, [endpoint]); 

	return {
		data,
		isLoading,
		error,
		reloadFetchData,
	};
};