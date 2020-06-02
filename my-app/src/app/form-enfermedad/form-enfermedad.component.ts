import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Enfermedad } from 'src/app/Models/EnfermedadModel';
import { EnfermedadService } from '../services/enfermedad.service';
import { strict } from 'assert';

@Component({
  selector: 'app-form-enfermedad',
  templateUrl: './form-enfermedad.component.html',
  styleUrls: ['./form-enfermedad.component.css']
})
export class FormEnfermedadComponent implements OnInit {

  constructor(public enfermedadservice: EnfermedadService,private fb: FormBuilder) { }

  MiForm: FormGroup;
  ngOnInit(): void {
    this.MiForm = this.fb.group({
      codigo: [''],
      nombre: [''],
      tipo: [''],
      gravedad: ['']
    });
  }

  public respuesta: any ;
  str1: string = "Se ha registrado correctamente la enfermedad : ";
  onSubmit(formValue: any) {

    const enfermedad = new Enfermedad();
    enfermedad.codigo = formValue.codigo;
    enfermedad.gravedad = formValue.gravedad;
    enfermedad.nombre = formValue.nombre;
    enfermedad.tipo = formValue.tipo;
    console.log(this.enfermedadservice.addEnfermedad(enfermedad));
    this.MiForm.reset();
    this.respuesta = this.str1.concat(enfermedad.nombre.toString());
  }
}
