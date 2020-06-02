import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../Models/MedicoModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url: string;
  url2: string;

  constructor(private http: HttpClient) { 
    this.url = "https://localhost:44325/api/Medico/EliminarMedico?identificacion=";
  }

  getMedicos() {
    return this.http.get('https://localhost:44325/api/Medico/Medicos');
  };

  addMedico(medico: Medico) {
    const data = new Medico();
    data.Apellidos = medico.Apellidos;
    data.CorreoElectronico = medico.CorreoElectronico;
    data.Direccion = medico.Direccion;
    data.Edad = medico.Edad;
    data.Estrato = medico.Estrato;
    data.Identificacion = medico.Identificacion;
    data.Nombres = medico.Nombres;
    data.Sexo = medico.Sexo;
    data.Telefono = medico.Telefono;
    data.Especializacion = medico.Especializacion
    this.http.post('https://localhost:44325/api/Medico/RegistrarMedico', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
 
  deleteMedico(codigo: string) {
    this.url2="";
    console.log('--------------------------');
    this.url2 = `${this.url}${codigo}`;
    console.log(this.url2);
    this.http.delete(this.url2).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
 
}
