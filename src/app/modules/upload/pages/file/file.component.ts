import { Component } from '@angular/core';
import { UploadService } from '@modules/upload/service/upload.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  file: any
  myFiles: string[] = []

  files: File[] = []

  public config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'http://localhost:8080/file/multiple',
    maxFilesize: 50,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  constructor(
    private uploadService: UploadService
  ) { }
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
  }

  subir() {
    this.uploadService.upload(this.file).subscribe((resp) => {
      console.log('respuesta', resp)
    })
  }

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i])
    }
  }

  multiple() {
    this.uploadService.multiple(this.myFiles).subscribe((resp) => {
      console.log('multiple', resp)
    })
  }

  onSelect(event: { addedFiles: any }) {
    this.files.push(...event.addedFiles)
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1)
  }

  multipleSubir() {
    if (!this.files[0]) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'info',
        title: 'No hay archivos seleccionados'
      });
    } else {
      this.uploadService.multiples(this.files).subscribe((resp) => {
        console.log('multiple', resp)
      })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Archivos subidos con exito'
      });

      
    }
  }

}
