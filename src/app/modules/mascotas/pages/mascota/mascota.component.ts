import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;
  mascotas: IMascota[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.mascotaById(id)))
      .subscribe((resp: any) => {
        this.mascota = resp;
      });
  }

  regresar() {
    this.router.navigate(['mascotas/listar'])
  }


  eliminar(): void {
    /*this.mascotasService.eliminarMascota(this.mascota.id).subscribe((resp:any) => {
      this.mascotas = resp;
    })*/

    //ELIMINAR DESDE EL DETALLE
    Swal.fire({
      title: '¿Esta seguro de eliminar la mascota?',
      text: `Esto no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado', 'El registro ha sido eliminado', 'success')
        this.mascotasService.eliminarMascota(this.mascota.id).subscribe((resp: any) => {
          this.mascotas = resp;
        })
        this.regresar()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Proceso cancelado', 'error')
      }
    })
  }

  getMascota(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.mascotasService.mascotaById(id || '')
      .subscribe((resp: IMascota) => console.log(resp))
  }

  obtenerById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.mascotasService.mascotasById(id || '').then(async (mascota: any) => {
      console.log("El id" + mascota)
    });
  }
}

