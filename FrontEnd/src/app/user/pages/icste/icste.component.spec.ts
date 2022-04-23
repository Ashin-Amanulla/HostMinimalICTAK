import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICSTEComponent } from './icste.component';

describe('ICSTEComponent', () => {
  let component: ICSTEComponent;
  let fixture: ComponentFixture<ICSTEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICSTEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ICSTEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
