import { Component, OnInit } from '@angular/core';
import { EnfermedadTratamiento } from 'src/app/Models/EnfermedadTratamientoModel';
import { strict } from 'assert';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EnfermedadtratamientoService } from '../services/enfermedadtratamiento.service';
import { EnfermedadService } from '../services/enfermedad.service';
import { TratamientoService } from '../services/tratamiento.service';


@Component({
  selector: 'app-enfermedad-tratamiento',
  templateUrl: './enfermedad-tratamiento.component.html',
  styleUrls: ['./enfermedad-tratamiento.component.css']
})
export class EnfermedadTratamientoComponent implements OnInit {

  enfermedades: Array<any> = [];
  tratamientos: Array<any> = [];

  constructor(public tratamientoservice: TratamientoService, public enfermedadservice: EnfermedadService, public enfermedadtratamiento: EnfermedadtratamientoService , private fb: FormBuilder) {
    this.verEnfermedadesTratamiento();
    this.enfermedadservice.getEnfermedades().subscribe((resp: Array<any>) => {
      this.enfermedades = resp;
    });
    this.tratamientoservice.getTratamientos().subscribe((resp: Array<any>) => {
      this.tratamientos = resp;
    });
   }

  MiForm: FormGroup;
  MiForm2: FormGroup;

  ngOnInit(): void {
    this.MiForm = this.fb.group({
      Codigo: [''],
    });

    this.MiForm2 = this.fb.group({
      enfermedad: [''],
      tratamiento: [''],
    });
  }

  rta: any;
  onSubmit(formValue: any) {
    const et = new EnfermedadTratamiento();
    et.iDtratamiento = formValue.tratamiento;
    et.iDenfermedad = formValue.enfermedad;
    console.log(et);
    this.rta = this.enfermedadtratamiento.addET(et);
    console.log(this.rta);
    this.MiForm2.reset();
    setTimeout(() => {
      location.reload();
    }, 1200);
  }

  filterPost = '';
  p: number = 1;
  enfermedadestratamientos: Array<any> = [];
  verEnfermedadesTratamiento() {
    this.enfermedadtratamiento.getEnfermedadTratamiento().subscribe((resp: Array<any>) => {
      this.enfermedadestratamientos = resp;
      console.log(this.enfermedadestratamientos);
    });
  }

  codigo: number;
  onDelete(formValue: any) {
    this.codigo = formValue.Codigo;
    console.log(this.codigo);
    this.enfermedadtratamiento.deleteET(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
}

