import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll')
  onScroll() {
    this.scrollService.compute();
  }

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {}
}
