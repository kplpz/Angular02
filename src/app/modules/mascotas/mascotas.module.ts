import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule
  ]
})
export class MascotasModule { }
