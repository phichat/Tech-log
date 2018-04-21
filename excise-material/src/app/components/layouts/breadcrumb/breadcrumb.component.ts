import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
    @Input() layout;
    pageInfo;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title
    ) { }
    ngOnInit(): void {
        this.activatedRoute.url.subscribe(() => {
            this.pageInfo = this.activatedRoute.snapshot.firstChild.data;
        });
        // this
        //     .router.events
        //     .filter(event => event instanceof NavigationEnd)
        //     .map(() => this.activatedRoute)
        //     .map(route => {
        //         while (route.firstChild) { return route.firstChild; }
        //     })
        //     .filter(route => route.outlet === 'primary')
        //     .mergeMap(route => route.data)
        //     .subscribe((event) => {
        //         this.titleService.setTitle(event['title']);
        //         this.pageInfo = event;
        //     });
    }

}
