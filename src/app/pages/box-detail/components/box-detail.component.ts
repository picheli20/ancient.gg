import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, from, map, Subscription, switchMap, tap } from 'rxjs';
import { BoxDetail } from 'src/app/graphql/interfaces/box.interface';
import { BoxService } from 'src/app/graphql/services/box.service';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.scss'],
})
export class BoxDetailComponent implements OnInit, OnDestroy {
  box: BoxDetail | null = null;
  opening = false;

  private subscription = new Subscription();

  constructor(
    private boxService: BoxService,
    private route: ActivatedRoute,
    private router: Router
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

    this.subscription.add(detailSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  open() {
    if (!this.box) {
      return;
    }

    this.opening = true;

    this.boxService
      .open({
        amount: 1,
        boxId: this.box.id,
        multiplierBoxBet: 0,
      })
      .pipe(finalize(() => (this.opening = false)))
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      });
  }
}
