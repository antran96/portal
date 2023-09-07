import { SideNavItems, SideNavSection } from "../models";
import { managementSideNavItems } from "./side-nav-management.data";
import { usersSideNavItems } from "./side-nav-users.data";


export const sideNavItems: SideNavItems = {
    Dashboard: {
        icon: 'fa-solid fa-border-all',
        title: 'Dashboard',
        isActive: false,
        link: '/dashboard'
    },
    Managament: {
      title: 'Managament',
      isActive: false,
      submenu: managementSideNavItems
    },
    Users: {
        title: 'Users',
        isActive: false,
        submenu: usersSideNavItems
    },
  };
  
  export const sideNavSections: SideNavSection[] = [
    {
        icon: 'fa-solid fa-house',
        title: 'Home',
        items: ['Dashboard'],
    },
    {
      icon: 'fa-solid fa-clipboard',
      title: 'Managament',
      items: ['Managament'],
    },
    {
      icon: 'fa-solid fa-users',
      title: 'Users',
      items: ['Users'],
    },
  ];