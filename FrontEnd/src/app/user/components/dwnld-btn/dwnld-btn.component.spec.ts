import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwnldBtnComponent } from './dwnld-btn.component';

describe('DwnldBtnComponent', () => {
  let component: DwnldBtnComponent;
  let fixture: ComponentFixture<DwnldBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwnldBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwnldBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
