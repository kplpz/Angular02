import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedireccionComponent } from '@modules/redireccion/redireccion.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FormularioComponent } from '@shared/formulario/formulario.component';

//matriz de objetos para las rutas
const routes: Routes = [
  //las rutas estan entre llaves. ARREGLO
  {
    path: ``,
    component: SkeletonComponent,
    children: [
      { path: '', loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule) },
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then((m) => m.DirectivasModule) },
      { path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then((m) => m.MascotasModule) },
      { path: 'place', loadChildren: () => import('@modules/rm/rm.module').then((m) => m.RmModule) },
      { path: 'formulario', component: FormularioComponent, title:'Formulario' },
      { path: 'anime', loadChildren: () => import('@modules/anime/anime.module').then((m) => m.AnimeModule) },
      { path: 'upload', loadChildren: () => import('@modules/upload/upload.module').then((m) => m.UploadModule) },
      { path: 'calendar', loadChildren: () => import('@modules/calendar/calendar.module').then((m) => m.CalendarModule) },
      { path: 'datos', loadChildren: () => import('@modules/leerdatos/leerdatos.module').then((m) => m.LeerdatosModule) },
    ]
  },
  // para que redireccione a vacio si viene otra cosa en el path que no sea una ruta
  // { path: '**', redirectTo: 'redireccion', pathMatch: 'full' },
  { path: '**', component: RedireccionComponent, title: 'Error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
