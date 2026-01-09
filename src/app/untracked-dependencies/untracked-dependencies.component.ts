import { Component, effect, OnInit, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-untracked-dependencies',
  templateUrl: './untracked-dependencies.component.html',
  styleUrls: ['./untracked-dependencies.component.scss']
})
export class UntrackedDependenciesComponent implements OnInit {
  count = signal(0);
  name = signal('getulio')

  a = signal(0)
  b = signal(1)
  constructor() {

    // untracked(() => {
    //   effect(() => {
    //     console.log(`count is ${this.count()} and name is ${this.name()}`)
    //   })
    // })

    effect(() => {
      console.log(this.a(), untracked(()=> this.b()))
      // console.log(this.a(), this.b())
    })
  }

  incrementA() {
    this.a.set(2)
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   console.log('count triggered')
    //   this.count.set(3)
    // },3000)

    // setTimeout(() => {
    //   console.log('name triggered')
    //   this.name.set('getulio souza')
    // }, 6000);

  }
}
