import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-signal',
  standalone: true,
  imports: [],
  templateUrl: './two-way-data-binding-signal.component.html',
  styleUrl: './two-way-data-binding-signal.component.scss'
})
export class TwoWayDataBindingSignalComponent {
  checked = model(false)
  disabled = input(false)

  toggle(){
    this.checked.update(value => !value)
  }
}
