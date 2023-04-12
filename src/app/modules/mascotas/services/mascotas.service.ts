import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  

  /*buscarMascota(termino:string):Observable<IMascota[]>{
    if(termino.length>1){
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/?=${termino}&?limit=5`);
    }else{
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas`);
    }
  }
*/
  constructor() {

  }
}
