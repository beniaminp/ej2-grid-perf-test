import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTreegridComponent } from './medium-treegrid.component';

describe('MediumTreegridComponent', () => {
  let component: MediumTreegridComponent;
  let fixture: ComponentFixture<MediumTreegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumTreegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumTreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
