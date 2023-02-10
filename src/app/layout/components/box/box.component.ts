import { Component, Input } from '@angular/core';
import { Box } from 'src/app/shared/interfaces/box.interface';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Input() box: Box | null = null;
}
