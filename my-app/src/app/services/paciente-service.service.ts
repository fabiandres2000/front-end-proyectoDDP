import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../Models/PacienteModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  constructor(private http: HttpClient) { }

  getEnPacientes() {
    return this.http.get('https://localhost:44325/api/Paciente/Pacientes');
  };

  addPaciente(paciente: Paciente) {
    const data = new Paciente();
    data.Apellidos = paciente.Apellidos;
    data.CorreoElectronico = paciente.CorreoElectronico;
    data.Direccion = paciente.Direccion;
    data.Edad = paciente.Edad;
    data.Estrato = paciente.Estrato;
    data.Identificacion = paciente.Identificacion;
    data.Nombres = paciente.Nombres;
    data.Sexo = paciente.Sexo;
    data.Telefono = paciente.Telefono;
    data.TipoAfiliacion = paciente.TipoAfiliacion
    this.http.post('https://localhost:44325/api/Paciente/Post', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

  
  deletePaciente(paciente: string) {
    const data = new Paciente();
    data.Identificacion = paciente;
    
    console.log('--------------------------');
    console.log(data.Identificacion);
    this.http.post('https://localhost:44325/api/Paciente/EliminarPaciente', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
}
