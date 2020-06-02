import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Medico } from 'src/app/Models/MedicoModel';
import { MedicoService } from '../services/medico.service';
import { strict } from 'assert';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(public medicoservice: MedicoService, private fb: FormBuilder) { 
    this.verMedicos();
  }
  filterPost = '';
  p: number = 1;
  MiForm: FormGroup;
  MiForm2: FormGroup;
  medicos: Array<any> = [];

  verMedicos() {
    this.medicoservice.getMedicos().subscribe((resp: Array<any>) => {
      this.medicos = resp;
      console.log(this.medicos);
    });
  }

  ngOnInit(): void {
    this.MiForm = this.fb.group({
      Especializacion: [''],
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

    this.MiForm2 = this.fb.group({
      Identificacion: [''],
    });
  }

  public respuesta: any;
  str1: string = "Se ha registrado correctamente el Medico : ";
  onSubmit(formValue: any) {
    const data = new Medico();
    data.Apellidos = formValue.Apellidos;
    data.CorreoElectronico = formValue.CorreoElectronico;
    data.Direccion = formValue.Direccion;
    data.Edad = formValue.Edad;
    data.Estrato = formValue.Estrato;
    data.Identificacion = formValue.Identificacion;
    data.Nombres = formValue.Nombres;
    data.Sexo = formValue.Sexo;
    data.Telefono = formValue.Telefono;
    data.Especializacion = formValue.Especializacion
    console.log(formValue);
    console.log(this.medicoservice.addMedico(data));
    this.MiForm.reset();
    this.respuesta = this.str1.concat(data.Identificacion.toString());
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  codigo: string;
  onDelete(formValue: any) {
    this.codigo = formValue.Identificacion;
    this.medicoservice.deleteMedico(this.codigo);
    console.log(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
