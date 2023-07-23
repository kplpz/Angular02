import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeerdatosRoutingModule } from './leerdatos-routing.module';
import { ExcelComponent } from './excel/excel.component';


@NgModule({
  declarations: [
    ExcelComponent
  ],
  imports: [
    CommonModule,
    LeerdatosRoutingModule
  ]
})
export class LeerdatosModule { }
