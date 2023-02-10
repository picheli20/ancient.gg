import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private onScroll$ = new Subject<number>();
  scroll$ = this.onScroll$.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  compute() {
    const window = this.document.defaultView;

    if (!window) {
      return;
    }

    const offSet = window.scrollY;
    this.onScroll$.next(offSet);
  }
}
