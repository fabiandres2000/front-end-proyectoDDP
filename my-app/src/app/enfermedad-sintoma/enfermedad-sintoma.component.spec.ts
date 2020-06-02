import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadSintomaComponent } from './enfermedad-sintoma.component';

describe('EnfermedadSintomaComponent', () => {
  let component: EnfermedadSintomaComponent;
  let fixture: ComponentFixture<EnfermedadSintomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermedadSintomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadSintomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
