import React, { useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { ConfirmacionEtapa } from "../../ConfirmacionEtapa/ConfirmacionEtapa";

export const Importaciones = () => {
	const [data, setData] = useState([]);
	return (
		<>
			<DataTable columns={columns || []} data={data || []} isHeaderActive={false} />
			<ConfirmacionEtapa />
		</>
	);
};

const columns = [
	{ nombre: "Modelo", campo: "codigoPedido" },
	{ nombre: "Item código", campo: "cliente" },
	{ nombre: "Descripción", campo: "articulo" },
	{ nombre: "Pedido DIC", campo: "cantidad" },
	{ nombre: "Precio (PEN)", campo: "precioUnidad" },
	{ nombre: "Estado", campo: "total" },
	{ nombre: "Foto", campo: "fechaPedido" },
	{ nombre: "Con foto", campo: "asd" },
	{ nombre: "Con precio", campo: "xcb" },
	{ nombre: "Costo (USD)", campo: "zxc" },
];
