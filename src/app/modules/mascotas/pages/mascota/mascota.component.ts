import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;

  constructor(
    private activeRoute: ActivatedRoute,
    private mascotaService: MascotasService,
    private router: Router
  ){}

  ngOnInit():void{
    this.activeRoute.params
    .pipe(switchMap(({id}) => this.mascotaService.mascotasById(id)))
    .subscribe((resp:any) => {
      this.mascota = resp;
    });
  }

  regresar(){
    this.router.navigate(['navigate/listar'])
  }


  getMascota():void{
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.mascotaService.mascotaById(id ||'')
    .subscribe((resp:any) => console.log(resp))
  }

  obtenerById(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.mascotaService.mascotasById(id || '').then(async (mascota:any)=>
    {
      console.log("El id"+mascota)
    });
  }
}

