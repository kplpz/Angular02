import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelComponent } from './excel/excel.component';

const routes: Routes = [
  {
    path: 'excel', component: ExcelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeerdatosRoutingModule { }
