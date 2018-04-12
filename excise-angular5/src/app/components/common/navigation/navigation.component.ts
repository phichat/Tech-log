import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}
