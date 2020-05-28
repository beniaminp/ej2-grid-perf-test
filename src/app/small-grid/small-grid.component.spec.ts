import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallGridComponent } from './small-grid.component';

describe('SmallGridComponent', () => {
  let component: SmallGridComponent;
  let fixture: ComponentFixture<SmallGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
