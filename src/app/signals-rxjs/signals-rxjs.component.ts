import { Component } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-signals-rxjs',
  templateUrl: './signals-rxjs.component.html',
  styleUrls: ['./signals-rxjs.component.scss']
})
export class SignalsRxjsComponent {
  counterObservable = interval(1000);

  counter = toSignal(this.counterObservable, {initialValue: 0})
}
