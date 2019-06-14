import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpCompComponent } from './work-exp-comp.component';

describe('WorkExpCompComponent', () => {
  let component: WorkExpCompComponent;
  let fixture: ComponentFixture<WorkExpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
