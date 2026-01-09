import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { isEqual } from 'lodash';

interface iProduct{
  id: number;
  title: string;
  price: number;
  color: string;
}

@Component({
  selector: 'app-equality-functions',
  templateUrl: './equality-functions.component.html',
  styleUrls: ['./equality-functions.component.scss']
})
export class EqualityFunctionsComponent implements OnInit {

  // data = signal(['test'], {equal: isEqual});

  // constructor() {
  //   effect(() => {
  //     console.log('effect executed')
  //     console.log('data:', this.data())
  //   })
  // }

  // ngOnInit() {
  //   setTimeout(() => {
  //     console.log('set timeout executed!')
  //     this.data.set(['test 2'])
  //   },4000 )
  // }

  constructor() {
    effect(() => {
      // console.log(this.count())
      console.log('effect called!')
      console.log(this.product())
    })
  }

  count: WritableSignal<number> = signal(89)

  product: WritableSignal<iProduct> = signal({
    id: 1,
    title: 'pen',
    price: 200,
    color: 'red'

  },

    { equal: isEqual }

    // {equal: isProductEqual()}

  )

  ngOnInit(): void {

  }

  updateCount() {
    // this.count.update(p => p + 1)
    this.product.update(() => {
      return {
        id: 1,
        title: 'pen',
        price: 120,
        color: 'red'
      }
    })
  }
}
