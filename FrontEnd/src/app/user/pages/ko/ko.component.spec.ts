import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KOComponent } from './ko.component';

describe('KOComponent', () => {
  let component: KOComponent;
  let fixture: ComponentFixture<KOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
