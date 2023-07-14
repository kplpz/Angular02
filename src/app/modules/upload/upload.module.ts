import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { FileComponent } from './pages/file/file.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FileComponent,
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    HttpClientModule,
  ]
})
export class UploadModule { }
