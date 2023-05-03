import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmRoutingModule } from './rm-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListaComponent } from './pages/lista/lista.component';
import { FormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';

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
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue:{...OPTIONS},
    }
  ]
})
export class RmModule { }
