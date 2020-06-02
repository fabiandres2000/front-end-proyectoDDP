import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Administrador } from '../Models/AdministradorModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url: string;
  url2: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:44325/api/Administrador/EliminarAdministrador?identificacion=";
  }

  getAdministradores() {
    return this.http.get('https://localhost:44325/api/Administrador/Administradores');
  };

  addAdministrador(administrador: Administrador) {
    const data = new Administrador();
    data.Apellidos = administrador.Apellidos;
    data.CorreoElectronico = administrador.CorreoElectronico;
    data.Direccion = administrador.Direccion;
    data.Edad = administrador.Edad;
    data.Estrato = administrador.Estrato;
    data.Identificacion = administrador.Identificacion;
    data.Nombres = administrador.Nombres;
    data.Sexo = administrador.Sexo;
    data.Telefono = administrador.Telefono;
    this.http.post('https://localhost:44325/api/Administrador/RegistrarAdministrador', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

  deleteAdministrador(codigo: string) {
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
