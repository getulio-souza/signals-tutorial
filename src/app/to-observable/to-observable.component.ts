import { Component, OnInit } from '@angular/core';
import { QueryService } from './query.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-to-observable',
  templateUrl: './to-observable.component.html',
  styleUrls: ['./to-observable.component.scss']
})
export class ToObservableComponent implements OnInit {
  constructor(
    private queryService: QueryService
  ) { }

  query = this.queryService.query;

  query$ = toObservable(this.query)

  results$: any = this.query$.pipe(switchMap(query => of(query)))

  onQueryChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value)
    this.query.set(value)
  }

  ngOnInit(): void {
    // console.log(this.results$)
  }
}
