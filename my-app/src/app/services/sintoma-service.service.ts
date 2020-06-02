import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sintoma } from '../Models/SintomaModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class SintomaServiceService {

  constructor(private http: HttpClient) { }

  getEnSintomas() {
    return this.http.get('https://localhost:44325/api/Sintoma/Sintomas');
  };


  addSintoma(sintoma: Sintoma) {
    const data = new Sintoma();
    data.codigo = sintoma.codigo;
    data.descripcion = sintoma.descripcion;
    this.http.post('https://localhost:44325/api/Sintoma/Post', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

  deleteSintoma(codigo: string) {
    const data = new Sintoma();
    data.codigo = codigo;

    console.log('--------------------------');
    console.log(data.codigo);
    this.http.post('https://localhost:44325/api/Sintoma/EliminarSintoma', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
}
