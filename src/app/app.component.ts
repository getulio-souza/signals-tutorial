import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signals-tutorial';

  componentToogle = signal(true)

  onToogleComponent() {
    console.log('called toogle in app component!')
    this.componentToogle.update((value) => !value)
  }
}
