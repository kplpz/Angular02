
import { Component, OnInit, ViewChild } from '@angular/core';
import { IPlace } from '@modules/rm/interface/placeh.interface';
import { ISP } from '@modules/rm/interface/superheroes.interface';
import { PlacehService } from '@modules/rm/service/placeh.service';
// import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator !:MatPaginator
  displayedColumns: string[] = ['position', 'image', 'name'];

  usuarios: IPlace[] = []
  usuariosString: string[] = []
  //API SUPERHEROE
  super: ISP[] = []
  sa: string[] = []
  //API POKEMON
  pokemons = []
  datos: any = []
  // dataSource = new MatTableDataSource<any>(this.datos);


  constructor(
    private placeService: PlacehService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.usuarioPH()
    //this.supp()
    // this.getPokemons()
  }


  superHeroe(): void {
    this.placeService.superHeroes.subscribe(resp => {
      this.super = resp
    })
  }
  supp(): void {
    this.placeService.obtenerSuper().then(async (res: any) => {
      res.forEach((o: any) => {
        this.super.push(o)
        this.sa.push(JSON.stringify(o))
        console.log(this.sa)
      })

      let array = JSON.parse(this.sa[0])
      console.log(array.name)
    })
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

  // PROBANDO API POKEMON V2
  // getPokemons() {
  //   let data

  //   for (let i = 1; i < 150; i++) {
  //     this.placeService.getPokemon(i).subscribe(res => {
  //       data = {
  //         position: i,
  //         image: res.sprites.front_default,
  //         name: res.name
  //       }
  //       // ESTO VIENE DEL SERVICE
  //       this.datos.push(data)
  //       this.dataSource = new MatTableDataSource<any>(this.datos)
  //       this.dataSource.paginator = this.paginator
  //     },
  //       err => {
  //         console.log(err)
  //       })
  //   }
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // getRow(row: any) {
  //   //console.log(row);
  //   this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  // }

}


