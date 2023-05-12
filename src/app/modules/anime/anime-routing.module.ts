import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { HomeComponent } from '@modules/home/pages/home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent, title : 'Home'},
  {path : 'listar', component : ListarComponent, title : 'Lista'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
