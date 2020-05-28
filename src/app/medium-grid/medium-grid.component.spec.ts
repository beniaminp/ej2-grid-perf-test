import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumGridComponent } from './medium-grid.component';

describe('MediumGridComponent', () => {
  let component: MediumGridComponent;
  let fixture: ComponentFixture<MediumGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
