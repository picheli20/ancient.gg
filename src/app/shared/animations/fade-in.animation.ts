import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('*', style({ opacity: 1 })),
  state('void', style([{ opacity: 0 }])),
  transition('* => void', [animate('.2s')]),
  transition('void => *', [animate('.2s')]),
]);
