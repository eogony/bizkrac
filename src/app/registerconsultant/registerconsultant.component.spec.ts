import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterconsultantComponent } from './registerconsultant.component';

describe('RegisterconsultantComponent', () => {
  let component: RegisterconsultantComponent;
  let fixture: ComponentFixture<RegisterconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
