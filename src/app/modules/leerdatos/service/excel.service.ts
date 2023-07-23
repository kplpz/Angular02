import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IDatos } from "../interface/excel";
import { Observable } from "rxjs";
import { IMascota } from "@modules/mascotas/interface/mascotas.interface";

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
url = 'http://localhost:8080/medico'

  constructor(
    private http : HttpClient
    ){}

    get medicos():Observable<IDatos[]>{
      return this.http.get<IDatos[]>(`${this.url}`)
    }

    medicosG(m: IDatos):Observable<IDatos[]>{
      return this.http.post<IDatos[]>(`${this.url}`, m)
    }
}
