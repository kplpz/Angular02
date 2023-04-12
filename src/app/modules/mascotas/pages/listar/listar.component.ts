import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit{
  mascotas: IMascota[] = []; //el array de mascotas
  parametroBuscar : string = '';

  //inyectando el servicio
  constructor(private mascotasService: MascotasService){}

  /*ngOnInit(): void {
    this.mascotasService.mascotas.subcribe((resp) =>{
      this.mascotas = resp
    })
  }*/

  buscar():void {}
}
