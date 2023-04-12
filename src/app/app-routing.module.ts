import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedireccionComponent } from '@modules/redireccion/redireccion.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

//matriz de objetos para las rutas
const routes: Routes = [
  //las rutas estan entre llaves. ARREGLO
  {
    path: ``,
    component: SkeletonComponent,
    children: [
      { path: '', loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule) },
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then((m) => m.DirectivasModule) },
      { path: 'mascotas', loadChildren:() => import('@modules/mascotas/mascotas.module').then((m)=> m.MascotasModule)}
    ]
  },
  // para que redireccione a vacio si viene otra cosa en el path que no sea una ruta
  // { path: '**', redirectTo: 'redireccion', pathMatch: 'full' },
  {path: '**', component: RedireccionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
