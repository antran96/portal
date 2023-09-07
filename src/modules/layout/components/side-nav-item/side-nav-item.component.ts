import { Component, Input, OnInit } from '@angular/core';
import { SideNavItem } from '../../models';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() sideNavItem !: SideNavItem
  @Input() indexSection: any
  constructor() { }

  ngOnInit(): void {
  }

}
