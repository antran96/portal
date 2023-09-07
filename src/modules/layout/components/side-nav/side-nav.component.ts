import { Component, Input, OnInit } from '@angular/core';
import { SideNavItems, SideNavSection } from '../../models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavItems!: SideNavItems
  @Input() sideNavSections!: SideNavSection[]
  constructor() { }

  ngOnInit(): void {
  }

}
