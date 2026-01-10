import { Component, OnDestroy, OnInit } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-signals-rxjs',
  templateUrl: './signals-rxjs.component.html',
  styleUrls: ['./signals-rxjs.component.scss'],
})
export class SignalsRxjsComponent implements OnInit, OnDestroy{
  counterObservable = interval(10000);
  private subscription!: Subscription

  counter = toSignal(this.counterObservable, { initialValue: 0 }, { manualCleanup: true });

  ngOnInit(): void {
    this.subscription = this.counterObservable.subscribe()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
