import React from "react";
import Logo from "@/assets/LogoDefault.png";

export const DefaultPage = () => {
	return (
		<div
			style={{ width: "100%", height: "calc(100vh - 80px)", display: "grid", placeItems: "center" }}
		>
			<img
				src={Logo}
				alt="logo"
				style={{ opacity: "0.1", width: "500px", filter: "grayscale(1)" }}
			/>
		</div>
	);
};
