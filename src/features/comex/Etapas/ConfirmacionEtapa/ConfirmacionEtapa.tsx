import React from "react";
import style from "./ConfirmacionEtapa.module.css";

import { ContentBox } from "@/components/ContentBox/ContentBox";
import { CheckBoxField } from "@/components/CheckBoxField/CheckBoxField";
import { CheckboxChangeEvent } from "primereact/checkbox";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentStep } from "@/store/slices/comex";

export const ConfirmacionEtapa = () => {
	const { currentStep } = useAppSelector((state) => state.comex);
	const dispatch = useAppDispatch();

	const nextStepAdmin = () => {
		if (currentStep > 8) {
			dispatch(setCurrentStep(0));
			return;
		}

		dispatch(setCurrentStep(currentStep + 1));
	};

	return (
		<ContentBox additionalClassName={style.confirmacionEtapa__container}>
			<div className={style.confirmacionEtapa__contain}>
				<div>
					<CheckBoxField
						textLabel={"Gerente financiero:"}
						value={false}
						name={""}
						onChange={function (e: CheckboxChangeEvent): void {
							throw new Error("Function not implemented.");
						}}
					/>

					<CheckBoxField
						textLabel={"Coordinador de comercio exterior:"}
						value={false}
						name={""}
						onChange={function (e: CheckboxChangeEvent): void {
							throw new Error("Function not implemented.");
						}}
					/>
				</div>

				<div className={style.confirmacionEtapa__buttons__container}>
					<button className={style.confirmacionEtapa__button} onClick={nextStepAdmin}>
						Confirmar etapa ADMIN
					</button>
					<button className={style.confirmacionEtapa__button}>Confirmar etapa</button>
				</div>
			</div>
		</ContentBox>
	);
};
