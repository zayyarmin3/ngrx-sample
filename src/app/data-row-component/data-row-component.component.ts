import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-data-row-component',
  templateUrl: './data-row-component.component.html',
  styleUrls: ['./data-row-component.component.scss']
})
export class DataRowComponentComponent implements OnInit {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
  }

}
