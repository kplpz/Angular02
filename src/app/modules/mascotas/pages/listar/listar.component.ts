import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  mascotasP: IMascota [] = [];
  datosM:string[]=[];
  datos:any [] = ['Usuario1',30,true, "{'salario':200}"];


  //inyectando el servicio
  constructor(private mascotasService: MascotasService,
    private router:Router){

      
    }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp:IMascota[]) =>{
      this.mascotas = resp
    });
    this.obtenerAll();
  }

  buscar():void {}

  obtenerAll(){
    this.mascotasService.obtenerAll().then(async(resp:any)=>{
      console.log("Lista"+resp);
      resp.forEach((obj:any) => {
        this.mascotasP.push(obj);
        this.datosM.push(JSON.stringify(obj));
      });
      let jsonArray = JSON.parse(this.datosM[0]);
      for(const key in jsonArray){
        console.log("llave",key,jsonArray[key]);
      }
      const {raza, des, ...datos}=jsonArray;
      console.log("raza"+raza)
      console.log("descripcion"+des)
      console.log("datos"+datos)
      const[obj1, obj2, obj3, ...otros]=resp
    });
  }
mostrar(){
  this.datos.forEach(obj =>{
    console.log("El forEach",obj);
  });

  console.log('**************');

  for(const key in this.datos){
    console.log('llaves', key);
  }
  for(const iterator of this.datos){
    console.log('Iterator'+iterator);
  }
}
  
}
