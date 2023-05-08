import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from './breadcrumb.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';
import { distinctUntilChanged, filter } from 'rxjs';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    });
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    // If no routeConfig is avalailable we are on the root path
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    // If the route is dynamic route such as ':id', remove it
    let lastRoutePart = path.split('/').pop();
    let isDynamicRoute = lastRoutePart.startsWith(':');
    if ( isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      let id: string = route.snapshot.params[paramName];
      let arrayId = id.split( '-' );
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      // label = arrayId[arrayId.length - 1];
    }

    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = path ? `${url}/${ path}` : url;

    const breadcrumb: Breadcrumb = {
      label,
      url: nextUrl,
    };
    // Only adding route with non-empty label
    const newBreadcrumbs = breadcrumb.label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];
    if (route.firstChild) {
      // If we are not on our current path yet,
      // +there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
  backUrl() {
    this.location.back();
  }
  nextUrl() {
    this.location.forward();
  }

}
