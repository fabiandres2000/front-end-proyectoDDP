import { Component, OnInit } from '@angular/core';
import { PacienteServiceService } from '../services/paciente-service.service';
import { Sintoma } from 'src/app/Models/SintomaModel';
import { strict } from 'assert';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SintomaServiceService } from '../services/sintoma-service.service';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.component.html',
  styleUrls: ['./sintomas.component.css']
})
export class SintomasComponent implements OnInit {

  constructor(public sintomaservice: SintomaServiceService, private fb: FormBuilder) {
    this.verSintomas();
  }

  filterPost = '';

  p: number = 1;
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


  sintomas: Array<any> = [];
  verSintomas() {
    this.sintomaservice.getEnSintomas().subscribe((resp: Array<any>) => {
      this.sintomas = resp;
      console.log(this.sintomas);
    });
  }

  rta: any;
  onSubmit(formValue: any) {
    const sintoma = new Sintoma();
    sintoma.codigo = formValue.codigo;
    sintoma.descripcion = formValue.descripcion;
    this.rta = this.sintomaservice.addSintoma(sintoma);
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
    this.sintomaservice.deleteSintoma(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 500);
  }
}
