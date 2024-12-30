import React, { useEffect, useState } from "react";
import style from "./Flujo.module.css";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";

import { handleChangeInput } from "@/helpers/handleTextBox";

import { Button } from "primereact/button";
import { TextBoxField } from "@/components/TextBoxField/TextBoxField";
import { SelectField } from "@/components/SelectField/SelectField";
import { DateField } from "@/components/DateField/DateField";
import { DataTable } from "@/components/DataTable/DataTable";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { PrimeModal } from "@/primeComponents/PrimeModal/PrimeModal";
import { MainContentStructure } from "@/components/MainContentStructure/MainContentStructure";
import { IngresoEgresoModal } from "./IngresoEgresoModal/IngresoEgresoModal";

interface PropsAddModal {
	postFetchData?: any;
	updateFetchData?: any;
	updateData?: any;
}

export const Flujo = ({ postFetchData = true, updateFetchData, updateData }: PropsAddModal) => {
	const ingresoModal = useModal();
	const egresoModal = useModal();
	const navigate = useNavigate();

	const [newData, setNewData] = useState<any>({
		banco: "",
		saldoInicialSoles: "",
		saldoInicialDolares: "",
	});

	const handleCreate = async () => {
		navigate("/tesoreria");
	};

	const handleUpdate = async () => {
		const { id, ...restData } = newData;
		const formData = new FormData();
		Object.entries(restData).forEach(([key, value]) => {
			if (value !== null && value !== undefined) {
				if (value instanceof File) {
					formData.append(key, value);
				} else {
					formData.append(key, String(value));
				}
			}
		});
		updateFetchData(id, formData);
	};

	// Seteando el estado del input al data si existe el update
	useEffect(() => {
		if (updateData) {
			setNewData(updateData);
		}
	}, [updateData]);

	return (
		<>
			<MainContentStructure>
				<h2 style={{ color: "#333", textTransform: "uppercase", marginBottom: "20px" }}>
					Crear flujo diario
				</h2>
				<SelectField
					textLabel="Banco:"
					name="banco"
					value={newData.banco}
					onChange={(e) => handleChangeInput(e, setNewData)}
					options={optionBanco}
					direction="row"
					labelWidth="140px"
				/>
				<div className={style.two__container}>
					<TextBoxField
						textLabel="Saldo Inicial Soles:"
						value={newData.saldoInicialSoles || ""}
						name="saldoInicialSoles"
						onChange={(e) => handleChangeInput(e, setNewData)}
						direction="row"
						labelWidth="140px"
					/>
					<TextBoxField
						textLabel="Saldo Inicial Dólares:"
						value={newData.saldoInicialDolares || ""}
						name="saldoInicialDolares"
						onChange={(e) => handleChangeInput(e, setNewData)}
						direction="row"
						labelWidth="140px"
					/>
				</div>

				<div className={style.tables__container}>
					<DataTable
						columns={columns || []}
						data={[]}
						isHeaderActive={true}
						textAddButton="Agregar Ingresos"
						onAddModal={() => ingresoModal.onVisibleModal()}
					/>
					<DataTable
						columns={columns2 || []}
						data={[]}
						isHeaderActive={true}
						textAddButton="Agregar Egresos"
						onAddModal={() => egresoModal.onVisibleModal()}
					/>
				</div>

				{postFetchData && (
					<div>
						<Button
							className="p-button-sm p-button-info mr-2"
							onClick={handleCreate}
							style={{ fontWeight: "600" }}
						>
							GUARDAR FLUJO DIARIO
						</Button>
					</div>
				)}

				{updateFetchData && (
					<div>
						<Button
							className="p-button-sm p-button-info mr-2"
							onClick={handleUpdate}
							style={{ fontWeight: "600" }}
						>
							GUARDAR FLUJO DIARIO
						</Button>
					</div>
				)}
			</MainContentStructure>

			{/* Ingreso Modal */}
			<PrimeModal
				header="Agregar Ingreso"
				modalStatus={ingresoModal.modalStatus}
				onHideModal={ingresoModal.onHideModal}
				width={600}
			>
				<IngresoEgresoModal postFetchData={true} />
			</PrimeModal>

			{/* Egreso Modal */}
			<PrimeModal
				header="Agregar Egreso"
				modalStatus={egresoModal.modalStatus}
				onHideModal={egresoModal.onHideModal}
				width={600}
			>
				<IngresoEgresoModal postFetchData={true} />
			</PrimeModal>
		</>
	);
};

const optionBanco = [
	{ name: "BCP", value: "proveedor1" },
	{ name: "BBVA", value: "proveedor2" },
	{ name: "SCOTIABANK", value: "proveedor3" },
	{ name: "INTERBANK", value: "proveedor4" },
];

const columns = [
	{ nombre: "Descripción", campo: "descripcion" },
	{ nombre: "Monto", campo: "monto" },
	{ nombre: "Moneda", campo: "moneda" },
];

const columns2 = [
	{ nombre: "Descripción", campo: "descripcion" },
	{ nombre: "Monto", campo: "monto" },
	{ nombre: "Moneda", campo: "moneda" },
];
