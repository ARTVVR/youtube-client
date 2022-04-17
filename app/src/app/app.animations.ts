import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';

const divTrigger = trigger('divTrigger', [
  state(
    'end',
    style({
      width: '575px',
      overflow: 'visible',
    })
  ),
  transition('void <=> end', animate(200)),
]);

export default divTrigger;
