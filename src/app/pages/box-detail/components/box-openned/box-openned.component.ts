import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import party from 'party-js';
import { BoxOpening } from 'src/app/graphql/interfaces/box.interface';

@Component({
  selector: 'app-box-openned',
  templateUrl: './box-openned.component.html',
  styleUrls: ['./box-openned.component.scss'],
})
export class BoxOpennedComponent implements OnInit {
  @Input() boxOpening: BoxOpening[] = [];
  @Output() closed = new EventEmitter<void>();
  @ViewChild('modal', { static: true })
  modalElement: ElementRef<HTMLElement> | null = null;

  ngOnInit() {
    if (!this.modalElement) {
      return;
    }

    party.confetti(this.modalElement.nativeElement, {
      count: party.variation.range(100, 100),
    });
  }

  close() {
    this.closed.emit();
  }
}
