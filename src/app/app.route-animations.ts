import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations'

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
      query(':leave', [
        style({
          display: 'none',
          height: '0px !important',
          opacity: 1,
        }),
        animate('0ms',
            style({
                display: 'none',
                height: '0px !important',
                opacity: 1,
            })
        )
      ], { optional: true }),
      group([
        query(':enter', [
          style({ verticalAlign: 'top', display:'block',opacity: 0}),
          animate('500ms',
            style({display: 'block',
              opacity: 1, verticalAlign: 'top'
            })
          )
        ], { optional: true }),
      ])
    ])
  ]);