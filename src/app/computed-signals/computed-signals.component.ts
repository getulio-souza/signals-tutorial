import { Component, computed, OnInit, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  templateUrl: './computed-signals.component.html',
  styleUrls: ['./computed-signals.component.scss']
})
export class ComputedSignalsComponent implements OnInit {
  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  expensiveComputation = computed(() => {
    console.log('expensive computation running...')
    return this.count() * 100
  })

  ngOnInit(): void {
    console.log(this.doubleCount())
    this.count.set(5)
    console.log(this.doubleCount())
  }

  expensiveCount() {
    console.log(this.expensiveComputation())
  }

  increment() {
    this.count.update((value) => value + 2)
    console.log(this.count())
  }
}
