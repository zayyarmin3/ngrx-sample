import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRowComponentComponent } from './data-row-component.component';

describe('DataRowComponentComponent', () => {
  let component: DataRowComponentComponent;
  let fixture: ComponentFixture<DataRowComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRowComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
