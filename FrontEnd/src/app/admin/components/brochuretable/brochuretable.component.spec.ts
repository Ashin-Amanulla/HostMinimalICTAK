import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochuretableComponent } from './brochuretable.component';

describe('BrochuretableComponent', () => {
  let component: BrochuretableComponent;
  let fixture: ComponentFixture<BrochuretableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochuretableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochuretableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
