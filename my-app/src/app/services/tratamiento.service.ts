import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tratamiento } from '../Models/TratamientoModel';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http: HttpClient) { }

  getTratamientos() {
    return this.http.get('https://localhost:44325/api/Tratamiento/Tratamientos');
  };


  addTratamieno(tratamiento: Tratamiento) {
    const data = new Tratamiento();
    data.codigo = tratamiento.codigo;
    data.descripcion = tratamiento.descripcion;
    this.http.post('https://localhost:44325/api/Tratamiento/Post', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }

  deleteTratamiento(codigo: string) {
    const data = new Tratamiento();
    data.codigo = codigo;

    console.log('--------------------------');
    console.log(data.codigo);
    this.http.post('https://localhost:44325/api/Tratamiento/EliminarTratamiento', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
}

