export const appRoutesComex = [
  {
    group: true,
    groupName: "Configuración",
    defaultOpen: false,
    routes: [
      {
        path: "/resumen",
        sidebarProps: {
          displayText: "Usuarios",
        },
      },
    ],
  },
  {
    group: true,
    groupName: "Comex",
    defaultOpen: false,
    routes: [
      {
        path: "/resumen",
        sidebarProps: {
          displayText: "Provedores",
        },
      },
    ],
  },
  {
    group: true,
    groupName: "Importaciones",
    defaultOpen: true,
    routes: [
      {
        path: "/resumen",
        sidebarProps: {
          displayText: "Resumen",
        },
      },
      {
        path: "/abonos",
        sidebarProps: {
          displayText: "Abonos",
        },
      },
    ],
  },
];

export const appRoutesGestionFinanciera = [
  {
    group: true,
    groupName: "PedidosFinan",
    defaultOpen: true,
    routes: [
      {
        path: "/pedidos",
        sidebarProps: {
          displayText: "Información de Pedidos",
        },
      },
      {
        path: "/solicitud-presupuesto",
        sidebarProps: {
          displayText: "Solicitudes de Presupuesto",
        },
      },
    ],
  },
  {
    group: true,
    groupName: "Configuración",
    defaultOpen: false,
    routes: [
      {
        path: "/usuarios",
        sidebarProps: {
          displayText: "Gestión de Usuarios",
        },
      },
    ],
  },
];

export const appRoutesTesoreria = [
  {
    group: true,
    groupName: "PedidosTeso",
    defaultOpen: true,
    routes: [],
  },
  {
    group: true,
    groupName: "Configuración",
    defaultOpen: false,
    routes: [
      {
        path: "/permisos",
        sidebarProps: {
          displayText: "Gestión de Permisos",
        },
      },
    ],
  },
];

export const appRoutesConf = [
//   {
//     group: true,
//     groupName: "PedidosTeso",
//     defaultOpen: true,
//     routes: [],
//   },
  {
    group: true,
    groupName: "Configuración",
    defaultOpen: false,
    routes: [
    //   {
    //     path: "/permisos",
    //     sidebarProps: {
    //       displayText: "Gestión de Permisos",
    //     },
    //   },
      {
        path: "/configuracion/users",
        sidebarProps: {
          displayText: "Usuarios",
        },
      },
      {
        path: "/configuracion/rol",
        sidebarProps: {
          displayText: "Roles",
        },
      },
      {
        path: "/configuracion/provider",
        sidebarProps: {
          displayText: "Proveedores",
        },
      },
      {
        path: "/configuracion/products",
        sidebarProps: {
          displayText: "Productos",
        },
      },
      {
        path: "/configuracion/bank",
        sidebarProps: {
          displayText: "Bancos",
        },
      },
      {
        path: "/configuracion/model",
        sidebarProps: {
          displayText: "Modelos",
        },
      },
    ],
  },
];
