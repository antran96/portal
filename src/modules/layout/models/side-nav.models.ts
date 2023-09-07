export interface SideNavItems {
    [index: string]: SideNavItem;
  }
  
  export interface SideNavItem {
    icon?: string;
    title: string;
    link?: string;
    isActive?: boolean;
    submenu?: SideNavItem[];
  }
  
  export interface SideNavSection {
    icon?: string;
    title?: string;
    items: string[];
  }