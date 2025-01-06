import React, { useState } from "react";
import style from "./AddModal.module.css";
import { handleChangeInput } from "@/helpers/handleTextBox";
import { Button } from "primereact/button";
import { DateField } from "@/components/DateField/DateField";

interface PropsAddModal {
	postFetchData?: any;
}

export const AddModal = ({ postFetchData }: PropsAddModal) => {
	const [newData, setNewData] = useState<any>({
		fechaIni: "",
		fechaFin: "",
	});

	const handleCreate = async () => {
		const formData = new FormData();
		Object.entries(newData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});

		postFetchData(formData);
	};

	return (
		<div className={style.column__container}>

			<DateField
				textLabel="Fecha Inicio:"
				name={"fechaIni"}
				labelWidth="80px"
				direction="row"
				value={newData.fechaIni}
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>

			<DateField
				textLabel="Fecha Fin:"
				name={"fechaFin"}
				labelWidth="80px"
				direction="row"
				value={newData.fechaFin}
				onChange={(e) => handleChangeInput(e, setNewData)}
			/>
			{postFetchData && (
				<div>
					<Button className="p-button-sm p-button-info mr-2" onClick={handleCreate}>
						DESCARGAR
					</Button>
				</div>
			)}

		</div>
	);
};
