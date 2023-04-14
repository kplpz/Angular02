import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HomeModule { }
