import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-signals-input',
  templateUrl: './signals-input.component.html',
  styleUrls: ['./signals-input.component.scss']
})
export class SignalsInputComponent {
  firstName = input<string>()
  age = input(0)
  lastName = input.required<string>()


  constructor(){
    effect(()=> {
      console.log(this.firstName())
      console.log(this.lastName())
      console.log(this.age())
    })
  }
}
