import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnfermedadComponent } from './form-enfermedad.component';

describe('FormEnfermedadComponent', () => {
  let component: FormEnfermedadComponent;
  let fixture: ComponentFixture<FormEnfermedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnfermedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
