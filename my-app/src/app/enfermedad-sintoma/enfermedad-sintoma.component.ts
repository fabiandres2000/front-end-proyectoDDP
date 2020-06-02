import { Component, OnInit } from '@angular/core';
import { EnfermedadSintoma } from 'src/app/Models/EnfermedadSintomaModel';
import { strict } from 'assert';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EnfermedadsintomaService } from '../services/enfermedadsintoma.service';
import { EnfermedadService } from '../services/enfermedad.service';
import { SintomaServiceService } from '../services/sintoma-service.service';



@Component({
  selector: 'app-enfermedad-sintoma',
  templateUrl: './enfermedad-sintoma.component.html',
  styleUrls: ['./enfermedad-sintoma.component.css']
})
export class EnfermedadSintomaComponent implements OnInit {
  enfermedades: Array<any> = [];
  sintomas: Array<any> = [];
  constructor(public sintomaservice: SintomaServiceService, public enfermedadservice: EnfermedadService, public enfermedadsintoma: EnfermedadsintomaService, private fb: FormBuilder) {
    this.verEnfermedadesSintomas();
    this.enfermedadservice.getEnfermedades().subscribe((resp: Array<any>) => {
      this.enfermedades = resp;
    });
    this.sintomaservice.getEnSintomas().subscribe((resp: Array<any>) => {
      this.sintomas = resp;
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
      sintoma: [''],
    });
  }

  rta: any;
  onSubmit(formValue: any) {
    const es = new EnfermedadSintoma();
    es.iDsintoma = formValue.sintoma;
    es.iDenfermedad = formValue.enfermedad;
    console.log(es);
    this.rta = this.enfermedadsintoma.addES(es);
    console.log(this.rta);
    this.MiForm2.reset();
    setTimeout(() => {
      location.reload();
    }, 1200);
  }

  filterPost = '';
  p: number = 1;
  enfermedadessintomas: Array<any> = [];
  verEnfermedadesSintomas() {
    this.enfermedadsintoma.getEnfermedadSintoma().subscribe((resp: Array<any>) => {
      this.enfermedadessintomas = resp;
      console.log(this.enfermedadessintomas);
    });
  }

  codigo: number;
  onDelete(formValue: any) {
    this.codigo = formValue.Codigo;
    this.enfermedadsintoma.deleteES(this.codigo);
    console.log(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
}
