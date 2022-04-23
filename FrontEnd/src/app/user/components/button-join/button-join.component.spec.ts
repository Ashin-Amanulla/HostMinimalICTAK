import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonJoinComponent } from './button-join.component';

describe('ButtonJoinComponent', () => {
  let component: ButtonJoinComponent;
  let fixture: ComponentFixture<ButtonJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
