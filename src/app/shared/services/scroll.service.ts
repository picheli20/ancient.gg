import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WINDOW } from './window.service';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private onScroll$ = new Subject<number>();
  scroll$ = this.onScroll$.asObservable();

  constructor(@Inject(WINDOW) private window: Window) {}

  compute() {
    this.onScroll$.next(this.window.scrollY);
  }
}
