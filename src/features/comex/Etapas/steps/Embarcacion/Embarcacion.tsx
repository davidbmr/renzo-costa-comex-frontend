import React from "react";
import style from "./Embarcacion.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCurrentStep } from "@/store/slices/comex";

export const Embarcacion = () => {
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
		<>
			<button className={style.embarcacion__button} onClick={() => nextStepAdmin()}>
				Confimar embarcación
			</button>
		</>
	);
};
