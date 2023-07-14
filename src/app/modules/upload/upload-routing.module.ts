import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadModule } from './upload.module';
import { FileComponent } from './pages/file/file.component';

const routes: Routes = [
  { path: 'upload', component: FileComponent, title: 'uplodad' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
