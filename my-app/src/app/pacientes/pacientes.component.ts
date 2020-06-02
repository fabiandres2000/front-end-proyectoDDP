import { Component, OnInit } from '@angular/core';
import { PacienteServiceService } from '../services/paciente-service.service';
import { Paciente } from 'src/app/Models/PacienteModel';
import { strict } from 'assert';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes: Array<any> = [];
  constructor(public pacienteservice: PacienteServiceService, private fb: FormBuilder) {
    this.verPacientes();
  }
  filterPost = '';
  p: number = 1;
  MiForm: FormGroup;

  ngOnInit(): void {
    this.MiForm = this.fb.group({
      Identificacion: [''],
    });
  }

  verPacientes() {
    this.pacienteservice.getEnPacientes().subscribe((resp: Array<any>) => {
      this.pacientes = resp;
      console.log(this.pacientes);
    });
  }

  codigo: string;
  onDelete(formValue: any) {
    this.codigo = formValue.Identificacion;
    console.log(this.codigo);
    this.pacienteservice.deletePaciente(this.codigo);
    location.reload();
  }
}
