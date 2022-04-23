import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechathlonComponent } from './techathlon.component';

describe('TechathlonComponent', () => {
  let component: TechathlonComponent;
  let fixture: ComponentFixture<TechathlonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechathlonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechathlonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
