import { SideNavItem } from "../models";

export const usersSideNavItems: SideNavItem[] = [
    {
        icon: 'fa-solid fa-book',
        title: 'Order',
        link: '/users/info',
        isActive: false,
    },
    {
        icon: 'fa-solid fa-book',
        title: 'Goods',
        link: '/users/favorite',
        isActive: false,
    },
]