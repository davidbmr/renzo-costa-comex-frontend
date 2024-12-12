import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import sidebarItemStyle from "./SidebarItem.module.css";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";

import imgLogo from "@/assets/LogoDefault.png";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { logout } from "@/store/slices/auth";
import { useAppDispatch } from "@/store/hooks";

export const Sidebar = ({ appRoutes, isResponsiveMenu }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const initialExpandedState = appRoutes.reduce((acc: any, group: any) => {
      if (group.group) {
        acc[group.groupName] = group.defaultOpen || false;
      }
      return acc;
    }, {});
    setExpandedGroups(initialExpandedState);
  }, [appRoutes]);

  const containerClassName = isResponsiveMenu
    ? `${style.container__drawer} ${style.responsiveMenu}`
    : style.container__drawer;

  const handleGroupToggle = (groupName: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupName]: !prev[groupName],
    }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={containerClassName}>
      <div className={style.logo__container}>
        <img src={imgLogo} className={style.logo__item} />
      </div>

      <div className={style.list__container}>
        {appRoutes.map((route: any, index: number) => {
          if (route.group) {
            const isExpanded = expandedGroups[route.groupName] || false;
            return (
              <React.Fragment key={index}>
                {index > 0 && <div className={style.whiteDivider} />}
                <div
                  className={style.group}
                  onClick={() => handleGroupToggle(route.groupName)}
                  style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                >
                  <span>{route.groupName}</span>
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
                  {route.routes.map((childRoute: any, childIndex: number) => (
                    <SidebarItem
                      key={childIndex}
                      item={childRoute}
                      styles={sidebarItemStyle}
                    />
                  ))}
                </div>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <SidebarItem item={route} styles={sidebarItemStyle} />
              </React.Fragment>
            );
          }
        })}
        <div
          style={{
            padding: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "absolute",
            bottom: "0",
            paddingRight: "40px",
          }}
        >
          <button
            style={{
              background: "var(--primary-color-app)",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
