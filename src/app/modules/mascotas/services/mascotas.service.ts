import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  
})
export class MascotasService {
  //http:string ='http://localhost:3000/mascotas/?q=Alemania&_limit=10';
  private baseUrl:string = environment.baseUrl;
  mascotas:any=[];

  buscarMascota(termino:string):Observable<IMascota[]>{
    if(termino.length>1){
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?=${termino}&_limit=5`);
    }else{
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
    }
  }

  constructor(private http:HttpClient) {

  }

 mascotasById(id:string){
    return new Promise(resolve =>{
      this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`)
      .subscribe((data) =>{
        resolve(data);
      })
    })
  }

  mascotaById(id:string):Observable<IMascota>{
    return this.http.get<IMascota>(`${this.baseUrl}/mascostas/${id}`);
  }

  obtenerAll(){
    return new Promise(resolve =>{
      this.http.get<IMascota>(`${this.baseUrl}/mascotas`)
      .subscribe((data) =>{
        resolve(data);
      })
    })
  }
}
