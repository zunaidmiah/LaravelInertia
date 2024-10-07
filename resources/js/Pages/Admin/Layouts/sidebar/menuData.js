export const menuItems = [
    {
        name: "Dashboard",
        icon: "fa fa-home",
        href: "/admin/dashboard",
        submenu: [],
    },
    {
        name: "Users",
        icon: "fa fa-users",
        submenu: [
            {
                name: "User List",
                hre: "/admin/dashboard",
            },
        ],
    },
    {
        name: "Settings",
        icon: "fas fa-gear",
        submenu: [
            {
                name: "General Settings",
                submenu: [],
            },
            {
                name: "Security Settings",
            },
        ],
    },
];
