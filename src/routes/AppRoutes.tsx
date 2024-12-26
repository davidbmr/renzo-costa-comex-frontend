import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

import { Login } from "@/features/Login/Login";
import { AppRoutesAdmin } from "./AppRoutesAdmin";
import { initializeAuth } from "@/store/slices/auth";
import { Modules } from "@/features/Modules/Modules";
import { AppRoutesComex } from "./AppRoutesComex";
import { AppRoutesConfiguracion } from "./AppRoutesConfiguracion";

export function AppRoutes() {
	const dispatch = useAppDispatch();
	const { token, module } = useAppSelector((state) => state.auth); // Ahora accedes a 'module' y no 'role'

	const [selectedModule, setSelectedModule] = useState<string>("comex");

	useEffect(() => {
		if (module) {
			setSelectedModule(module); // Usar 'module' en lugar de 'role'
		}
	}, [module]);

	const isAuthenticated = localStorage.getItem("token");

	return (
		<BrowserRouter>
			<Routes>
				{!isAuthenticated ? (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/*" element={<Navigate to="/login" />} />
					</>
				) : (
					<>
						<Route path="/login" element={<Navigate to="/modules" />} />
						<Route path="/modules" element={<Modules />} />

						<Route path="/comex/*" element={<AppRoutesComex />} />
						<Route path="/configuracion/*" element={<AppRoutesConfiguracion selectedModule={selectedModule} />} />
						<Route path="/admin/*" element={<AppRoutesAdmin selectedModule={selectedModule} />} />
						<Route path="/*" element={<Navigate to="/modules" />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
}
