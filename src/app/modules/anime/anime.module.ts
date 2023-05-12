import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { CardComponent } from './card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarComponent } from './pages/buscar/buscar.component';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AnimeModule { }
