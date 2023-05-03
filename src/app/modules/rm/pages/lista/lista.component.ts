
import { Component, OnInit } from '@angular/core';
import { IPlace } from '@modules/rm/interface/placeh.interface';
import { PlacehService } from '@modules/rm/service/placeh.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: IPlace[] = []
  usuariosString: string[] = []


  constructor(
    private placeService: PlacehService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioPH()
  }

  usuarioPH(): void {
    this.placeService.obtenerAll().then(async (resp: any) => {
      resp.forEach((obj: any) => {
        this.usuarios.push(obj);
        // PARA IMPRIMIR EN CONSOLA
        this.usuariosString.push(JSON.stringify(obj))
        //console.log(this.usuariosString)
      })
    })
  }

}


