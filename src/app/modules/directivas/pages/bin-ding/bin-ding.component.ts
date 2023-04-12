import { Component } from '@angular/core';

@Component({
  selector: 'app-bin-ding',
  templateUrl: './bin-ding.component.html',
  styleUrls: ['./bin-ding.component.scss']
})
export class BinDingComponent {
  // cambiar propiedades
  habilitar: boolean = false
  clase: string = 'btn btn-danger'
  txtPlaceHolder:string = 'Su nombre'
  txtType : string = 'radio'
  isCheked:boolean = true

  cambiarPropiedad(){
    this.habilitar =! this.habilitar
    this.txtPlaceHolder = 'Deshabilitado'
    this.txtType = 'checkbox'
    this.isCheked =! this.isCheked
    this.clase = 'btn btn-primary'
  }
}
