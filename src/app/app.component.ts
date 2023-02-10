import { Component, HostListener } from '@angular/core';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('window:scroll')
  onScroll() {
    this.scrollService.compute();
  }

  constructor(private scrollService: ScrollService) {}
}
