import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = []; //EL ARRAY DE MASCOTAS de la interface
  parametroBuscar: string = ''; //RECOGE DESDE LA VISTA
  mascotasP: IMascota[] = [];
  datosM: string[] = [];
  data: any;
  datos: any[] = ['Usuario1', 30, true, "salario:200"];


  //INYECTANDO EL SERVICIO
  constructor(
    private mascotasService: MascotasService,
    //private router:Router
    private toastr: ToastrService
  ) {


  }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp) => {
      this.mascotas = resp;
    });
    //this.obtenerAll();
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
      //console.log("raza "+raza)
      //console.log("descripcion "+des)
      //console.log("datos "+datos)

      //DESTRUCTURACION
      const [obj1, obj2, obj3, ...otros] = resp
      console.log(obj1)
      // console.log(obj2)
      // console.log(obj3)
      //console.log(otros)
    });
  }
  mostrar() {
    this.datos.forEach(obj => {
      console.log("El forEach " + obj);
    });

    console.log('**************');

    for (const key in this.datos) {
      console.log('llaves ', key);
    }
    for (const iterator of this.datos) {
      console.log('Iterator ' + iterator);
    }
  }

  eliminarMascota(pet: IMascota) {
    Swal.fire({
      title: '¿Esta seguro de eliminar la mascota ?',
      text: `Esto no se puede revertir, se borrara ${pet.raza}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.mascotas = this.mascotas.filter((objMascota: IMascota) =>
          objMascota.id !== pet.id)
        //eliminar definitivamente
        this.mascotasService.borrarMascota(pet)
          .subscribe((resp: any) => {
            this.toastr.success('El registro fue eliminado con exito', 'Eliminado',
              { positionClass: 'toast-top-right' })
          },(err:any)=>{
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: err.error.msg
            })
          })
      }
    })
  }
}
