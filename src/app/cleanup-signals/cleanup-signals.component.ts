import { Component, effect, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-cleanup-signals',
  templateUrl: './cleanup-signals.component.html',
  styleUrls: ['./cleanup-signals.component.scss']
})
export class CleanupSignalsComponent {

  count = signal(0)

  constructor() {
    effect((onCleanUp) => {
      const timer = setInterval(() => {
        console.log('interval effect executed!' + this.count())
      }, 10000)

      onCleanUp(() => {
        clearInterval(timer)
      })
    })
  }
}
