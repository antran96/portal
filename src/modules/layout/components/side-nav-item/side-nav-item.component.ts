import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideNavItem } from '../../models';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() sideNavItem !: SideNavItem
  @Input() indexSection: any
  @Output() isSectionActive: EventEmitter<any> = new EventEmitter
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(
        (event: Event): event is NavigationEnd =>
          event instanceof NavigationEnd
      )
    )
    .subscribe((event: NavigationEnd) => {
      if(event.url === this.sideNavItem.link) {
        let data = {
          value: true
        }
        this.isSectionActive.emit(data)
      }
    });
  }

}
