import { Component, computed, OnInit, Signal, signal, WritableSignal, effect } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  templateUrl: './computed-signals.component.html',
  styleUrls: ['./computed-signals.component.scss']
})
export class ComputedSignalsComponent implements OnInit {

  constructor() {
    //using effect
    effect(() => {
      console.log(`the count after effect is: ${this.count()}`)
    })

  }

  count: WritableSignal<number> = signal(0)
  doubleCount: Signal<number> = computed(() => this.count() * 2)

  items: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  showCount = signal(false)

  conditionalCount = computed(() => {
    if (!this.showCount()) {
      console.log('nothing to show here')
      return `nothing to show here`
    } else {
      return `the count value is ${this.count()}`
    }
  })

  updateShowCount() {
    this.showCount.update((value)=> !value)
  }

  getContionalCount() {
    console.log(this.conditionalCount())
  }

  dividerByTwo: Signal<number[]> = computed(() => {
    console.log('filtering event numbers...')
    return this.items().filter((item)=> item % 3 === 0)
  })

  expensiveComputation = computed(() => {
    console.log('expensive computation running...')
    return this.count() * 100
  })

  ngOnInit(): void {
    console.log(this.doubleCount())
    this.count.set(5)
    console.log(this.doubleCount())
  }

  doubleNumbers() {
    this.dividerByTwo()
    console.log(this.dividerByTwo())
  }

  expensiveCount() {
    console.log(this.expensiveComputation())
  }

  increment() {
    this.count.update((value) => value + 1)
    console.log(this.count())
  }
}
