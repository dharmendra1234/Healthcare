import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExamplsComponent } from './material-exampls.component';

describe('MaterialExamplsComponent', () => {
  let component: MaterialExamplsComponent;
  let fixture: ComponentFixture<MaterialExamplsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialExamplsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExamplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
