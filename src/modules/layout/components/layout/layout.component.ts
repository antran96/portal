import { Component, OnInit } from '@angular/core';
import { sideNavItems, sideNavSections } from '../../data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sideNavItems = sideNavItems;
  sideNavSections = sideNavSections
  constructor() { }

  ngOnInit(): void {
  }

}
