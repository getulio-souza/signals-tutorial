import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter = signal(0)

  increment() {
    this.counter.update((count) => count + 1)
  }

  decrement() {
    this.counter.update((count) => count - 1)
  }
}
