import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCategoryComponent } from './expert-category.component';

describe('ExpertCategoryComponent', () => {
  let component: ExpertCategoryComponent;
  let fixture: ComponentFixture<ExpertCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
