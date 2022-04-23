import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCoursesComponent } from './popular-courses.component';

describe('PopularCoursesComponent', () => {
  let component: PopularCoursesComponent;
  let fixture: ComponentFixture<PopularCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
