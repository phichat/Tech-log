import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ma-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private router: Router) {
  }


  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}
