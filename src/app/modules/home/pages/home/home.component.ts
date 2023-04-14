import { Component, OnInit } from '@angular/core';
import { RmService } from './services/rm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characterList: any[]= [];


  constructor(private rmService: RmService) {
    //console.log('el servicio RM')
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');.
    this.rmService.getCharacter().subscribe((resp: any) => this.characterList = resp);
    //console.log(resp)


  }

  year = new Date();
}
