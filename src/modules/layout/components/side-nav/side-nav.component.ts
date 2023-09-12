import { Component, Input, OnInit } from '@angular/core';
import { SideNavItems, SideNavSection } from '../../models';
import { LayoutService } from '../../services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavItems!: SideNavItems
  @Input() sideNavSections!: SideNavSection[]
  constructor(private service: LayoutService) { }

  ngOnInit(): void {
  }

  onCheckActiveSection(value: any, i: number) {
    console.log(value)
    if(value) {
      console.log(value)
      this.sideNavSections.map((item: any) => item.isActive = false)
      this.sideNavSections[i].isActive = value
    }
  }
}
