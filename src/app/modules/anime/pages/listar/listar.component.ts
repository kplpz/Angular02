import { Component, OnInit } from '@angular/core';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  cards: IAnime[] = []
  offset = 0;
  a!:string | null;
  cardText = new FormControl('')



  constructor(
    private animeSer: AnimeService
  ) { }

  ngOnInit(): void {
    // this.cards = [];
    // this.buscarCards();
    // this.inputReactivo()
  }

  inputReactivo(){
    this.cardText.valueChanges
    .pipe(debounceTime(500)) // tiempo que espera desde que el usuario inicia a escribir hasta el final
    .subscribe(resp =>{
      this.cards = []; //se limpia el array para cargar la busqueda
      this.buscarCardsForma2(resp);
    })
    this.cards = []
    this.buscarCardsForma2()
  }

  // onScroll() {
  //   this.offset += 50;
  //   // this.buscarCards();
  //   this.buscarCardsForma2()
  // }

  onScroll(paraBuscar : string | null) {
    this.offset += 50;
    // console.log('para buscar',paraBuscar)
    this.animeSer.busquedas(this.a, this.offset)
  }

  buscarCards() {
    this.animeSer.getCardsAnime(this.offset).subscribe(res => {
      console.log(res)
      this.cards = [...this.cards, ...res];
    });
  }

  buscarCardsForma2(nombreCard : string | null = null){
    this.animeSer.getCardsAnimeForma2(nombreCard,this.offset).subscribe(res => {
      // console.log(res)
      this.cards = [...this.cards, ...res];
    });
  }

get resultados(){
  return this.animeSer.cards;
}
}
