import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  url = 'http://localhost:8080/file';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<Object> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.url}/upload`, formData);
  }

  multiple(myFiles: string[]) {
    const formData = new FormData();
    for (var i = 0; i < myFiles.length; i++) {
      formData.append('file', myFiles[i]);
    }
    console.log(formData)
    return this.http.post(`${this.url}/multiple`, formData);

  }
}
