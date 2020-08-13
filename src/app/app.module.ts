import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponentComponent } from './data-table-component/data-table-component.component';
import { DataRowComponentComponent } from './data-row-component/data-row-component.component';
import { DataCellComponentComponent } from './data-cell-component/data-cell-component.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer'


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponentComponent,
    DataRowComponentComponent,
    DataCellComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
