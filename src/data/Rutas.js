export const appRoutesComex = [
	// {
	//   group: true,
	//   groupName: "PedidosComex",
	//   defaultOpen: true,
	//   routes: [
	// 	{
	// 	  path: "/pedidos",
	// 	  sidebarProps: {
	// 		displayText: "Información de Pedidos",
	// 	  },
	// 	},
	//   ],
	// },
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