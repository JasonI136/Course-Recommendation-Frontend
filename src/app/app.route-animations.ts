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

const childStyles = {
    display: 'none'
}

// export const fader = trigger('routeAnimations', [
//     transition('* <=> *', [
//       query(':leave', [
//         style({
//           display: 'none',
//           opacity: 1
//         }),
//       ], { optional: true }),
//       group([
//         query(':enter', [
//           style({ verticalAlign: 'top', display:'block',opacity: 0}),
//           animate('500ms',
//             style({display: 'block',
//               opacity: 1, verticalAlign: 'top'
//             })
//           )
//         ], { optional: true }),
//       ]),
//     ])
//   ]);

// export const fader = trigger("routeAnimations", [
//   transition("* <=> *", [
//     style({ position: "relative" }),
//     query(":enter, :leave", [
//       style({
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//       }),
//     ]),
//     query(":leave", [style({ display: "none" })]),
//     query(":leave", animateChild()),
//     group([
//       query(":leave", [
//         animate("0ms ease", style({ opacity: 0, display: "none" })),
//       ]),
//       query(":enter", [animate("500ms ease", style({ opacity: 1 }))]),
//     ]),
//     query(":enter", animateChild()),
//   ]),
// ]);

export const slider =
  trigger('routeAnimations', [
    transition('isUserInterests => isCourseRecommendations', slideTo('left') ),
    transition('* => isHome', slideTo('left') ),
    transition('* => isContactUs', slideTo('right') ),
    transition('isContactUs => *', slideTo('left') ),
    transition('isHome => *', slideTo('right') ),
    transition('isCourseRecommendations => *', slideTo('right') ),
    transition('isLogin => *', slideTo('left') ),
    transition('isUserInterests => isLogin', slideTo('right') ),
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        //top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}