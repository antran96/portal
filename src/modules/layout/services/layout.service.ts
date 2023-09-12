import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { sideNavItems } from '../data';
import { Router } from '@angular/router';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class LayoutService {
  _sideNavVisible$: BehaviorSubject<Object> = new BehaviorSubject({});
  constructor(private router: Router) { }

  getSideNavVisible() {
    return this._sideNavVisible$.asObservable()
  }

  setSideNavVisible(value: any) {
    return this._sideNavVisible$.next(value)
  }

  activeSection$(routeActive: string, section: any): Observable<boolean> {
    return new Observable<boolean>(o => {
      let isChecked: boolean = false
      if(section['submenu']) {
        section['submenu'].forEach((subItem: any) => {
          this.activeSection$(routeActive, subItem)
        })
      } else {
        isChecked = section['link'] === routeActive
      }
      o.next(isChecked)
      o.complete()
    })
  }
}
