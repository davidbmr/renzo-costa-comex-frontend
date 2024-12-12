import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./TitleSection.module.css";
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { FiArrowLeft } from "react-icons/fi";

interface TitleSectionProps {
	titleText?: string;
}

export const TitleSection = ({ titleText }: TitleSectionProps) => {
	const navigate = useNavigate();

	return (
		<div className={style.titleSection__container}>
		
			<p className={style.titleSection__title}>{titleText}</p>
		</div>
	);
};
