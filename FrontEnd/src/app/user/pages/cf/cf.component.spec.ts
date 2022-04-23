import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFComponent } from './cf.component';

describe('CFComponent', () => {
  let component: CFComponent;
  let fixture: ComponentFixture<CFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
