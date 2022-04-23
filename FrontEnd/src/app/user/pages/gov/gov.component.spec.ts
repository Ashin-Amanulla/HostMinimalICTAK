import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovComponent } from './gov.component';

describe('GovComponent', () => {
  let component: GovComponent;
  let fixture: ComponentFixture<GovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
