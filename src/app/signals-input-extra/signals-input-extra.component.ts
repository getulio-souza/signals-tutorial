import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signals-input-extra',
  standalone: true,
  imports: [],
  templateUrl: './signals-input-extra.component.html',
  styleUrl: './signals-input-extra.component.scss'
})
export class SignalsInputExtraComponent {
  disabled = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value 
    }
  })
}
