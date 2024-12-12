import React from "react";
import style from "./CierreImportacion.module.css";

import { useNavigate } from "react-router-dom";

export const CierreImportacion = () => {
	const navigate = useNavigate();
	return (
		<>
			<button className={style.cierreImportacion__button} onClick={() => navigate("/comex")}>
				Confimar cierre de importacion
			</button>
		</>
	);
};
