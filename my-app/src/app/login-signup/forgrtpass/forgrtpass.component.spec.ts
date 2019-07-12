import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgrtpassComponent } from './forgrtpass.component';

describe('ForgrtpassComponent', () => {
  let component: ForgrtpassComponent;
  let fixture: ComponentFixture<ForgrtpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgrtpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgrtpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
