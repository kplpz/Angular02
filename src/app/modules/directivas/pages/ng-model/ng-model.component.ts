import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {

  titulo = 'Directiva ngModel';
  nombre = '';
  nombre2 = '';
  formartNombre(): void {
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre2.toUpperCase();
  }
}
