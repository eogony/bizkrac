import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindconsultantComponent } from './findconsultant.component';

describe('FindconsultantComponent', () => {
  let component: FindconsultantComponent;
  let fixture: ComponentFixture<FindconsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindconsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
