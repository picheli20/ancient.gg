import { Component } from '@angular/core';
import { from } from 'rxjs';
import { BoxService } from 'src/app/graphql/services/box.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  boxes$ = from(this.boxService.get());

  constructor(private boxService: BoxService) {}
}
