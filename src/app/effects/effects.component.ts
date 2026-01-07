
import { Component, effect, Injector, runInInjectionContext, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.scss']
})
export class EffectsComponent {

  counter = signal(0)

  //you can put the effect outside the constructor
  //  but you need to assign it to a property and will become a class property

  // loggingEffect = effect(()=>{
  //   console.log(`count value called inside effect: ${this.counter}`)
  // })

  constructor(
    private injector: Injector
  ){}

  // initializeLogging(){
  //   runInInjectionContext(this.injector, ()=> {
  //     effect(()=>{
  //       console.log(`count value called inside effect: ${this.counter()}`)
  //     })
  //   })
  // }

  initializeLogging(){
      effect(()=>{
        console.log(`count value called inside effect: ${this.counter()}`)
      }, 
      {injector: this.injector}
    )
  }
}
