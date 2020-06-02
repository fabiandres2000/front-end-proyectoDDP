import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnfermedadSintoma } from '../Models/EnfermedadSintomaModel';
import { strict } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class EnfermedadsintomaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "";
    this.url = "https://localhost:44325/api/EnfermedadSintoma/EliminarEnfermedadSintoma?id=";
  }

  getEnfermedadSintoma() {
    return this.http.get('https://localhost:44325/api/EnfermedadSintoma/EnfermedadesSintomas');
  };

  addES(enfermedadsintoma: EnfermedadSintoma) {
    const data = new EnfermedadSintoma();
    data.iDsintoma = enfermedadsintoma.iDsintoma;
    data.iDenfermedad = enfermedadsintoma.iDenfermedad;
    this.http.post('https://localhost:44325/api/EnfermedadSintoma/Post', data).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
 
  deleteES(codigo: number) {
    console.log('--------------------------');
    this.url = `${this.url}${codigo}`;
    console.log(this.url);
    this.http.delete(this.url).subscribe(
      (resp) => {
        console.log(resp)
        return resp;
      });
  }
}
