import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  catchError,
  filter,
  finalize,
  from,
  of,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
import {
  BoxDetail,
  BoxOpening,
} from 'src/app/graphql/interfaces/box.interface';
import { BoxService } from 'src/app/graphql/services/box.service';
import { fadeIn } from 'src/app/shared/animations/fade-in.animation';
import { isAuthenticated } from 'src/app/shared/store/selector/user.selector';
import { StoreApp } from 'src/app/shared/store/store-app.interface';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss'],
  animations: [fadeIn],
})
export class BoxDetailComponent implements OnInit, OnDestroy {
  box: BoxDetail | null = null;
  opening = false;
  boxOpening: BoxOpening[] = [];
  isAuthenticated$ = this.store.select(isAuthenticated);
  isAuthenticated = false;
  error = '';

  private subscription = new Subscription();

  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<StoreApp>
  ) {}

  ngOnInit(): void {
    const detailSubscription = this.route.paramMap
      .pipe(
        switchMap((params) =>
          from(this.boxService.load(params.get('slug') || ''))
        ),
        tap((box) => {
          if (!box) {
            this.router.navigate(['/404']);
          }
        })
      )
      .subscribe((data) => (this.box = data));

    const authSubscriptions = this.isAuthenticated$.subscribe(
      (data) => (this.isAuthenticated = data)
    );

    this.subscription.add(detailSubscription);
    this.subscription.add(authSubscriptions);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  open() {
    if (!this.box) {
      return;
    }

    this.error = '';
    this.opening = true;

    this.boxService
      .open({
        amount: 1,
        boxId: this.box.id,
        multiplierBoxBet: 0,
      })
      .pipe(
        finalize(() => (this.opening = false)),
        catchError((error) => {
          this.error = error;

          return of(null);
        }),
        filter(Boolean)
      )
      .subscribe((data) => {
        this.boxOpening = data;
      });
  }

  cleanBox() {
    this.boxOpening = [];
  }
}
