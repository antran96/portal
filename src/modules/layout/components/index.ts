import { LayoutComponent } from "./layout/layout.component";
import { SideNavItemComponent } from "./side-nav-item/side-nav-item.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { TopNavComponent } from "./top-nav/top-nav.component";

export const components = [
    LayoutComponent,  SideNavComponent, TopNavComponent, SideNavItemComponent
]

export * from './layout/layout.component'
export * from './side-nav/side-nav.component'
export * from './top-nav/top-nav.component'
export * from './side-nav-item/side-nav-item.component'