import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { EnfermedadService } from '../services/enfermedad.service';
import { Enfermedad } from 'src/app/Models/EnfermedadModel';
import { strict } from 'assert';

@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.css']
})
export class EnfermedadesComponent implements OnInit {
  enfermedades: Array<any> = [];
  constructor(public enfermedadservice: EnfermedadService, private fb: FormBuilder) {
    this.verEnfermedades();
  }

  filterPost = '';
  p: number = 1;
  MiForm: FormGroup;

  ngOnInit(): void {
    this.MiForm = this.fb.group({
      codigo: [''],
    });
  }

  verEnfermedades() {
   
    this.enfermedadservice.getEnfermedades().subscribe((resp: Array<any>) => {
      this.enfermedades = resp;
      console.log(this.enfermedades);
    });
  }

  codigo: any;
  onDelete(formValue: any) {
    const enfermedad = new Enfermedad();
    enfermedad.codigo = formValue.codigo;
    enfermedad.gravedad = "";
    enfermedad.nombre = "";
    enfermedad.tipo = "";
    this.codigo = "";
    console.log(this.enfermedadservice.deleteEnfermedad(enfermedad));
    location.reload();
  }
}
