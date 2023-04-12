import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './pages/mascota/mascota.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HomeComponent } from '@modules/home/pages/home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent, title : 'Home'},
  {path:'listar', component: ListarComponent, title:'listar'},
  {path:':id',component:MascotaComponent,title:'Detalle'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
