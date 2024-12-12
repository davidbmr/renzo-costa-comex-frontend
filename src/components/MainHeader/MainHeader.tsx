import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoPerson, IoLogOutOutline } from "react-icons/io5";
import { Toast } from "primereact/toast";
import style from "./MainHeader.module.css";
import { useAppDispatch } from "@/store/hooks";
import NotificationBell from "@/components/NotificationBell/NotificationBell";
// import { appRoutesAdmin } from "@/data/Rutas";

const notifications = [
  { id: 1, message: "You have a new message", read: false },
  { id: 2, message: "Your report is ready to download", read: true },
  { id: 3, message: "Reminder: Meeting at 3 PM", read: false },
];

interface MainHeaderProps {
  additionalClassName?: string;
}

export const MainHeader = ({ additionalClassName }: MainHeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const location = useLocation();

  // Buscar el título dinámicamente basado en la ruta actual
  // const getTitleFromRoute = () => {
  //   for (const group of appRoutesAdmin) {
  //     const matchingRoute = group.routes.find(
  //       (route) => route.path === location.pathname
  //     );
  //     if (matchingRoute) return matchingRoute.sidebarProps.displayText;
  //   }
  //   return "Inicio"; // Valor predeterminado si no se encuentra
  // };

  // const currentTitle = getTitleFromRoute();

  const handleLogout = () => {
    dispatch({ type: "auth/logout" }); // Llama a la acción de logout
    navigate("/login");
  };

  const containerClassName = `${style.mainHeader__container} ${additionalClassName || ""}`;

  return (
    <header className={containerClassName}>
      <Toast ref={toast} />
      {/* <div className={style.mainHeader__title}>{currentTitle}</div> */}
      <div className={style.mainHeader__navbar__container}>
        <NotificationBell notifications={notifications} />
        <div style={{ position: "relative" }}>
          <div className={style.mainHeader__profile}>
            <IoPerson />
          </div>
         
        </div>
      </div>
    </header>
  );
};
