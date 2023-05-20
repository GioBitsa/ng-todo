import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('200ms', style({ opacity: 0 }))]),
]);
