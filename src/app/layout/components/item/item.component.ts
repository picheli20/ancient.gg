import { Component, Input } from '@angular/core';
import { Item } from 'src/app/graphql/interfaces/item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: Item | null = null;
}
