import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Administrador } from 'src/app/Models/AdministradorModel';
import { AdministradorService } from '../services/administrador.service';
import { strict } from 'assert';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(public administradorservice: AdministradorService, private fb: FormBuilder) { 
    this.verAdministradores();
  }
  
  filterPost = '';
  p: number = 1;
  MiForm: FormGroup;
  MiForm2: FormGroup;
  administradores: Array<any> = [];
 
  ngOnInit(): void {
    this.MiForm = this.fb.group({
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

  verAdministradores() {
    this.administradorservice.getAdministradores().subscribe((resp: Array<any>) => {
      this.administradores = resp;
      console.log(this.administradores);
    });
  }

  public respuesta: any;
  str1: string = "Se ha registrado correctamente el administrador : ";
  onSubmit(formValue: any) {
    const data = new Administrador();
    data.Apellidos = formValue.Apellidos;
    data.CorreoElectronico = formValue.CorreoElectronico;
    data.Direccion = formValue.Direccion;
    data.Edad = formValue.Edad;
    data.Estrato = formValue.Estrato;
    data.Identificacion = formValue.Identificacion;
    data.Nombres = formValue.Nombres;
    data.Sexo = formValue.Sexo;
    data.Telefono = formValue.Telefono;
    console.log(formValue);
    console.log(this.administradorservice.addAdministrador(data));
    this.MiForm.reset();
    this.respuesta = this.str1.concat(data.Identificacion.toString());
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  codigo: string;
  onDelete(formValue: any) {
    this.codigo = formValue.Identificacion;
    this.administradorservice.deleteAdministrador(this.codigo);
    console.log(this.codigo);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
