import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCellComponentComponent } from './data-cell-component.component';

describe('DataCellComponentComponent', () => {
  let component: DataCellComponentComponent;
  let fixture: ComponentFixture<DataCellComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCellComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCellComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
