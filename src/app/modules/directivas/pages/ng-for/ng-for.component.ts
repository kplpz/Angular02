import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
frutas : string[] = [
  "Manzana", "Pera","Melocoton", "Sandia", "Banano","Melon"
]

}
