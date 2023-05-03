import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() obj!: IMascota
  @Output()
  eliminar = new EventEmitter<IMascota>();


  eliminarPets(ob: IMascota) {
    this.eliminar.emit(ob) //esto se usara en el componente padre se usara el id
  }
}


