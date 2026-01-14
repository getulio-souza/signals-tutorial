import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output-from-observable',
  templateUrl: './output-from-observable.component.html',
  styleUrls: ['./output-from-observable.component.scss']
})
export class OutputFromObservableComponent implements OnInit{

  @Output() nameChange = new EventEmitter<any>()

  nameChange$ = new Observable<string>(observer => {
    let counter = 1
    setInterval(() => {
      this.nameChange.emit('name has been changed' + counter++)
      observer.next('name has been changed: ' + counter++)
    },1000)
  })

  ngOnInit(): void {
    this.nameChange$.subscribe()

  }
}
