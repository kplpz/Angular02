import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { FileComponent } from './pages/file/file.component';
import { HttpClientModule } from '@angular/common/http';
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';

// const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
//   // Change this to your upload POST address:
//    url: 'http://localhost:8080/file/multiple',
//    maxFilesize: 50,
//    acceptedFiles: 'image/*'
//  };

@NgModule({
  declarations: [
    FileComponent,
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    HttpClientModule,
    DropzoneModule,
    NgxDropzoneModule
  ],
  // providers: [
  //   {
  //     provide: DROPZONE_CONFIG,
  //     useValue: DEFAULT_DROPZONE_CONFIG
  //   }
  // ]
})
export class UploadModule { }
