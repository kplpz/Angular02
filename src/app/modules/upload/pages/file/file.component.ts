import { Component } from '@angular/core';
import { UploadService } from '@modules/upload/service/upload.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  file:any
  myFiles: string[] =[]

  constructor(
    private uploadService: UploadService
  ){}
  onFileSelected(event: Event){
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  subir(){
    this.uploadService.upload(this.file).subscribe((resp) =>{
      console.log('respuesta', resp)
    })
  }

  onFileChange(event: any){
    for(let i=0; i < event.target.files.length; i++){
      this.myFiles.push(event.target.files[i])
    }
  }

  multiple(){
    this.uploadService.multiple(this.myFiles).subscribe((resp)=>{
      console.log('multiple', resp)
    })
  }

}
