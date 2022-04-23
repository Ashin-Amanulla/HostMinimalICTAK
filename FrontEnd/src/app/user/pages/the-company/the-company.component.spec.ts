import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCompanyComponent } from './the-company.component';

describe('TheCompanyComponent', () => {
  let component: TheCompanyComponent;
  let fixture: ComponentFixture<TheCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
