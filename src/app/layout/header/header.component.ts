import { Component, OnInit } from '@angular/core';
import { LOGO } from 'src/app/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  //se agrega la ruta de la constante
logo:string = LOGO;

}
