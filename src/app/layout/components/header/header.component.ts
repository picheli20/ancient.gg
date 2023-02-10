import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  parallaxModifiers = {
    logo: '0px',
    sky: '0px',
    landscape: '0px',
    gun: '0px',
  };

  private subscriptions = new Subscription();

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    const scrollSubscription = this.scrollService.scroll$.subscribe(
      (amount) => {
        this.parallaxModifiers.sky = `-${amount * 0.1}px`;
        this.parallaxModifiers.landscape = `-${amount * 0.3}px`;
        this.parallaxModifiers.logo = `${amount * 0.3}px`;
        this.parallaxModifiers.gun = `${amount * 0.1}px`;
      }
    );

    this.subscriptions.add(scrollSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
