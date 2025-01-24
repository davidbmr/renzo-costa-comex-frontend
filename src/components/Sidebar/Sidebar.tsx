import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import { SidebarItem } from "./SidebarItem";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { logout } from "@/store/slices/auth";
import { useAppDispatch } from "@/store/hooks";
import imgLogo from "@/assets/LogoDefault.png";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import sidebarItemStyle from "./SidebarItem.module.css";

export const Sidebar = ({ appRoutes = [], isResponsiveMenu }: any) => {
  const [expandedGroups, setExpandedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  const navigate = useNavigate();

  useEffect(() => {
    const initialExpandedState = appRoutes.reduce((acc: any, group: any) => {
      if (group.group) {
        acc[group.groupName] = group.defaultOpen || false;
      }
      return acc;
    }, {});
    setExpandedGroups(initialExpandedState);
  }, [appRoutes]);

  const handleGroupToggle = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const handleLogout = () => {
    navigate("/modules");
  };

  return (
    <div
      className={
        isResponsiveMenu
          ? `${style.container__drawer} ${style.responsiveMenu}`
          : style.container__drawer
      }
    >
      <div className={style.logo__container}>
        <img src={imgLogo} className={style.logo__item} />
      </div>
      <div className={style.list__container}>
        {Array.isArray(appRoutes) &&
          appRoutes.map((group: any, index: number) => {
            if (group.group) {
              const isExpanded = expandedGroups[group.groupName] || false;
              return (
                <React.Fragment key={index}>
                  <div
                    className={style.group}
                    onClick={() => handleGroupToggle(group.groupName)}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{group.groupName}</span>
                    {isExpanded ? (
                      <IoMdRemove size={20} style={{ marginLeft: "auto" }} />
                    ) : (
                      <IoMdAdd size={20} style={{ marginLeft: "auto" }} />
                    )}
                  </div>

                  <div
                    className={`${style.childrenContainer} ${
                      isExpanded ? style.expanded : style.collapsed
                    }`}
                  >
                    {group.routes.map((route: any, childIndex: number) => (
                      <SidebarItem key={childIndex} item={route} styles={sidebarItemStyle}/>
                    ))}
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })}
        {/* Botón de cerrar sesión */}
        <div className={style.logoutContainer}>
          <button className={style.logoutButton} onClick={handleLogout}>
            <IoArrowBack />
            Volver a módulos
          </button>
        </div>
      </div>
    </div>
  );
};
