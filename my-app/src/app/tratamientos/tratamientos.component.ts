import { Component, OnInit } from '@angular/core';
import { PacienteServiceService } from '../services/paciente-service.service';
import { Tratamiento } from 'src/app/Models/TratamientoModel';
import { strict } from 'assert';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TratamientoService } from '../services/tratamiento.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent implements OnInit {

  constructor(public tratamientoservice: TratamientoService, private fb: FormBuilder) {
    this.verTratamientos();
  }

  p: number = 1;
  filterPost = '';

  MiForm: FormGroup;
  MiForm2: FormGroup;
  ngOnInit(): void {
    this.MiForm = this.fb.group({
      Codigo: [''],
    });

    this.MiForm2 = this.fb.group({
      codigo: [''],
      descripcion: [''],
    });
  }


  tratamientos: Array<any> = [];
  verTratamientos() {
    this.tratamientoservice.getTratamientos().subscribe((resp: Array<any>) => {
      this.tratamientos = resp;
      console.log(this.tratamientos);
    });
  }

  rta: any;
  onSubmit(formValue: any) {
    const tratamiento = new Tratamiento();
    tratamiento.codigo = formValue.codigo;
    tratamiento.descripcion = formValue.descripcion;
    this.rta = this.tratamientoservice.addTratamieno(tratamiento);
    console.log(this.rta);
    this.MiForm2.reset();
    setTimeout(() => {
      location.reload();
    }, 1200);

  }

  codigo: string;
  onDelete(formValue: any) {
    this.codigo = formValue.Codigo;
    console.log(this.codigo);
    this.tratamientoservice.deleteTratamiento(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 500);
  }
}
