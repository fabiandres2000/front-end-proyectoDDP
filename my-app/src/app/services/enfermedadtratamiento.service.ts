import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnfermedadTratamiento } from '../Models/EnfermedadTratamientoModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadtratamientoService {

  url: string;
  url2: string;
  constructor(private http: HttpClient) { 
    this.url = "https://localhost:44325/api/EnfermedadTratamiento/EliminarEnfermedadTratamiento?id=";
  }

  getEnfermedadTratamiento() {
    return this.http.get('https://localhost:44325/api/EnfermedadTratamiento/EnfermedadesTratamientos');
  };

  addET(enfermedadtratamiento: EnfermedadTratamiento) {
    const data = new EnfermedadTratamiento();
    data.iDtratamiento = enfermedadtratamiento.iDtratamiento;
    data.iDenfermedad = enfermedadtratamiento.iDenfermedad;
    this.http.post('https://localhost:44325/api/EnfermedadTratamiento/AsociarEnfermedadTratamiento', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

  deleteET(codigo: number) {
    this.url2="";
    console.log('--------------------------');
    this.url2 = `${this.url}${codigo}`;
    console.log(this.url);
    this.http.delete(this.url2).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

}

