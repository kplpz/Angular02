import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'

})

export class RmService {


  constructor(private htpp: HttpClient) {



  }

  getCharacter(): any {
  return this.htpp.get('https://rickandmortyapi.com/api/character')
  }
}
