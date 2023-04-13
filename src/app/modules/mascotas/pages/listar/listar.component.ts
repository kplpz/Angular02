import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; //EL ARRAY DE MASCOTAS
  parametroBuscar: string = ''; //RECOGE DESDE LA VISTA
  mascotasP: IMascota[] = [];
  datosM: string[] = [];
  data: any;
  datos: any[] = ['Usuario1', 30, true, "{'salario':200}"];


  //INYECTANDO EL SERVICIO
  constructor(
    private mascotasService: MascotasService
    //private router:Router
  ) {


  }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp) => {
      this.mascotas = resp;
    });
    this.obtenerAll();
    //this.mostrar();
    this.buscar();
  }

  buscar(): void {
    this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp: any) => {
      this.mascotas = resp;
    });
  }


  obtenerAll() {
    this.mascotasService.obtenerAll().then(async (resp: any) => {

      resp.forEach((obj: any) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
        //console.log("Lista" + this.datosM);
      });
      let jsonArray = JSON.parse(this.datosM[0]);
      for (const key in jsonArray) {
        //console.log(key,jsonArray[key]);
      }
      const { raza, des, ...datos } = jsonArray;
      //console.log("raza"+raza)
      //console.log("descripcion"+des)
      //console.log("datos"+datos)

      //DESTRUCTURACION
      const [obj1, obj2, obj3, ...otros] = resp
      // console.log(obj1)
      // console.log(obj2)
      // console.log(obj3)
      // console.log(otros)
    });
  }
  mostrar() {
    this.datos.forEach(obj => {
      console.log("El forEach", obj);
    });

    console.log('**************');

    for (const key in this.datos) {
      console.log('llaves', key);
    }
    for (const iterator of this.datos) {
      console.log('Iterator' + iterator);
    }
  }

}
