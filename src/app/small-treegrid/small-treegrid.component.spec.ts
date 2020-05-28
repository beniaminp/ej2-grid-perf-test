import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTreegridComponent } from './small-treegrid.component';

describe('SmallTreegridComponent', () => {
  let component: SmallTreegridComponent;
  let fixture: ComponentFixture<SmallTreegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTreegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTreegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
