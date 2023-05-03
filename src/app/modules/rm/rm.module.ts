import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmRoutingModule } from './rm-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './pages/lista/lista.component';
import { FormsModule } from '@angular/forms';

const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'always',
  hideRequiredMarker:true
};

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    RmRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
  ]
})
export class RmModule { }
