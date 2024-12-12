import React from "react";
import { Link, useLocation } from "react-router-dom";

export const SidebarItem = ({ item, styles }: any) => {
  const location = useLocation();
  const isActive = item.path === location.pathname;

  // Devuelve solo si `item.sidebarProps` y `item.path` están definidos
  if (!item.sidebarProps || !item.path) {
    return null;
  }

  return (
    <Link
      to={item.path}
      className={`${styles.listItem} ${isActive ? styles.active : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      <div className={styles.itemText}>{item.sidebarProps.displayText}</div>
    </Link>
  );
};
