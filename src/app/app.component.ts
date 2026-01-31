import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signals-tutorial';

  firstName: string = 'Getulio'
  lastName: string = 'Souza'
  age: number = 34

  parentChecked: boolean = false;
  isDisabled: boolean = false;
  checkedChange: any;

  componentToogle = signal(true)

  onToogleComponent() {
    console.log('called toogle in app component!')
    this.componentToogle.update((value) => !value)
  }

  onNameChange(value: string) {
    console.log(value)
  }

  handleCheckedChange(newCheckedValue: boolean){
    this.parentChecked = newCheckedValue
  }
}
