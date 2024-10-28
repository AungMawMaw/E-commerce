import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-route-display',
  standalone: true,
  imports: [],
  templateUrl: './route-display.component.html',
  styleUrl: './route-display.component.css',
})
export class RouteDisplayComponent implements OnInit, OnDestroy {
  currentRoute: string = '';
  previousRoute: string = '';
  private routerSubscription!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Only update previousRoute if not on the NotFound route
        if (event.url !== '/not-found') {
          this.previousRoute = this.currentRoute;
        }
        this.currentRoute = event.url;
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
