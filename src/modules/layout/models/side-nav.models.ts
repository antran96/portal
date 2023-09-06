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
    title?: string;
    items: string[];
  }