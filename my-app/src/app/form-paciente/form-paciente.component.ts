import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Paciente } from 'src/app/Models/PacienteModel';
import { PacienteServiceService } from '../services/paciente-service.service';
import { strict } from 'assert';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  constructor(public pacienteservice: PacienteServiceService, private fb: FormBuilder) { }

  MiForm: FormGroup;
  ngOnInit(): void {
    this.MiForm = this.fb.group({
      TipoAfiliacion: [''],
      Identificacion: [''],
      Nombres: [''],
      Apellidos: [''],
      Edad: [''],
      Estrato: [''],
      Telefono: [''],
      Sexo: [''],
      CorreoElectronico: [''],
      Direccion: [''],
    });
  }

  public respuesta: any;
  str1: string = "Se ha registrado correctamente el paciente : ";
  onSubmit(formValue: any) {
    const data = new Paciente();
    data.Apellidos = formValue.Apellidos;
    data.CorreoElectronico = formValue.CorreoElectronico;
    data.Direccion = formValue.Direccion;
    data.Edad = formValue.Edad;
    data.Estrato = formValue.Estrato;
    data.Identificacion = formValue.Identificacion;
    data.Nombres = formValue.Nombres;
    data.Sexo = formValue.Sexo;
    data.Telefono = formValue.Telefono;
    data.TipoAfiliacion = formValue.TipoAfiliacion
    console.log(formValue);
    console.log(this.pacienteservice.addPaciente(data));
    this.MiForm.reset();
    this.respuesta = this.str1.concat(data.Identificacion.toString());
  }

}
