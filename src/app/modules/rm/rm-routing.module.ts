import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'lista', component: ListaComponent, title: 'Lista' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RmRoutingModule { }
