import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadTratamientoComponent } from './enfermedad-tratamiento.component';

describe('EnfermedadTratamientoComponent', () => {
  let component: EnfermedadTratamientoComponent;
  let fixture: ComponentFixture<EnfermedadTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermedadTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
