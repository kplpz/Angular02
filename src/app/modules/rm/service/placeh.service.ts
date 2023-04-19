import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlace } from '../interface/placeh.interface';
import { Observable } from 'rxjs';
import { ISP } from '../interface/superheroes.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacehService {
  url = 'https://jsonplaceholder.typicode.com/users'

  urlSp = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

  urlPK = 'https://pokeapi.co/api/v2'

  constructor(
    private http: HttpClient
  ) { }

  obtenerAll() {
    return new Promise(resolve => {
      this.http.get<IPlace>(`${this.url}`)
        .subscribe((data) => {
          resolve(data);
        })
    })
  }

  obtenerSuper() {
    return new Promise(resolve => {
      this.http.get<ISP>(`${this.urlSp}`)
        .subscribe(data => {
          resolve(data)
        })
    })
  }
  get superHeroes(): Observable<ISP[]> {
    return this.http.get<ISP[]>(`${this.urlSp}`)
  }

  getPokemon(index: any) {
    return this.http.get<any>(`${this.urlPK}/pokemon/${index}`)
  }
}
