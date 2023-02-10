import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { getUser } from 'src/app/shared/store/selector/user.selector';
import { StoreApp } from 'src/app/shared/store/store-app.interface';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit, OnDestroy {
  @HostBinding('class.solid')
  isSolid = false;

  // Maybe move this in the future for some global config?
  readonly SOLID_OFFSET = 300;
  private subscriptions = new Subscription();

  user$ = this.store.select(getUser);

  constructor(
    private scrollService: ScrollService,
    private store: Store<StoreApp>,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const scrollSubscription = this.scrollService.scroll$.subscribe(
      (amount) => (this.isSolid = this.SOLID_OFFSET < amount)
    );

    this.subscriptions.add(scrollSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  login() {
    const window = this.document.defaultView;

    if (!window) {
      return;
    }

    window.location.href = `https://api-staging.csgoroll.com/auth/steam?redirectUri=${window.location.href}`;
  }
}
