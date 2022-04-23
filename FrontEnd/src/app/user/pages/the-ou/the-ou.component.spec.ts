import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheOUComponent } from './the-ou.component';

describe('TheOUComponent', () => {
  let component: TheOUComponent;
  let fixture: ComponentFixture<TheOUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheOUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheOUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
