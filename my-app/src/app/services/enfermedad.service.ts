import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Enfermedad } from '../Models/EnfermedadModel';

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  constructor(private http: HttpClient) {

  }

  // Iniciar variable de la instancia
  Enfermeda: Array<Object>;

  getEnfermedades() {
     return this.http.get('https://localhost:44325/api/Enfermedad/Enfermedades');
  };

  addEnfermedad(enfermedad: Enfermedad) {
    const data = new Enfermedad();
    data.codigo = enfermedad.codigo;
    data.gravedad = enfermedad.gravedad;
    data.nombre = enfermedad.nombre;
    data.tipo = enfermedad.tipo;
    this.http.post('https://localhost:44325/api/Enfermedad/Post', data).subscribe(
      (resp)=> {
        console.log(resp)
        return resp;
      });
  }

  deleteEnfermedad(enfermedad: Enfermedad) {
    const data2 = new Enfermedad();
    data2.codigo = enfermedad.codigo;
    data2.gravedad = enfermedad.gravedad;
    data2.nombre = enfermedad.nombre;
    data2.tipo = enfermedad.tipo;
    this.http.post('https://localhost:44325/api/Enfermedad/EliminarEnfermedad', data2).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
}




