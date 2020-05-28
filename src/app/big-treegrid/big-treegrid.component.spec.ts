import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigTreegridComponent } from './big-treegrid.component';

describe('BigTreegridComponent', () => {
  let component: BigTreegridComponent;
  let fixture: ComponentFixture<BigTreegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigTreegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigTreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
