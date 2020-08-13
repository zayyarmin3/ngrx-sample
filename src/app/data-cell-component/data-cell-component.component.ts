import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-data-cell-component',
  templateUrl: './data-cell-component.component.html',
  styleUrls: ['./data-cell-component.component.scss']
})
export class DataCellComponentComponent {

  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
