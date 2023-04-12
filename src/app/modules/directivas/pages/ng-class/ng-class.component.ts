import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
tema: string = 'Uso de ngClass'

//variable que cambiara la calse de la alerta con el ngClass
alerta : string = 'alert-danger'

propiedad = {
  danger : false
};
message : number = 5;
}
