import { Injectable } from '@angular/core';
import { IMascota } from '../interface/mascotas.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'

})
export class MascotasService {
  private baseUrl:string = environment.baseUrl;

  constructor(
    private http:HttpClient
    ) {
  }

  //OBSERVABLES
  get mascotas():Observable<IMascota[]>{
    return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`)
  }

  buscarMascota(termino:string):Observable<IMascota[]>{
    if(termino.length>1){
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limit=5`);
    }else{
      return this.http.get<IMascota[]>(`${this.baseUrl}/mascotas`);
    }
  }

  /*buscarMascotaId(id: string): Observable<IMascota> {
    if (id.length > 0) {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.get<IMascota>(`${this.baseUrl}/mascotas/`);
    }
  }*/
  mascotaById(id:string):Observable<IMascota>{
    return this.http.get<IMascota>(`${this.baseUrl}/mascotas/${id}`);
  }

  eliminarMascota(id:string): Observable<IMascota>{
    return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/${id}`)

  }
  // borrarMascota(id:IMascota): Observable<IMascota>{
  //   return this.http.delete<IMascota>(`${this.baseUrl}/mascotas/${id}`)

  // }

  borrarMascota(p:IMascota): any{
    return this.http.delete(`${this.baseUrl}/mascotas/${p.id}`)

  }
//PROMESAS
mascotasById(id:string){
    return new Promise(resolve =>{
      this.http.get<IMascota[]>(`${this.baseUrl}/mascotas/${id}`)
      .subscribe((data) =>{
        resolve(data);
      })
    })
  }

  obtenerAll(){
    return new Promise(resolve =>{
      this.http.get<IMascota>(`${this.baseUrl}/mascotas`)
      .subscribe((data) =>{
        resolve(data);
      })
    })
  }


  /************AGREGADO*****************/

  nuevaMascota(p:IMascota){
    return this.http.post(`${this.baseUrl}/mascotas`,p)
  }
  editarMascota(p:IMascota){
    console.log(p)
    const url = `${this.baseUrl}/mascotas/${p.id}`
    return this.http.put(url,p);

  }

}
