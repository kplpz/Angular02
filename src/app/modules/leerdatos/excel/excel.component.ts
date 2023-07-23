import { Component } from '@angular/core';
import { IDatos } from '../interface/excel';
import * as xls from 'xlsx';
import { ExcelService } from '../service/excel.service';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent {
datos !: IDatos[]

  constructor(private servicio: ExcelService){}

  leerFile(event: Event){
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0]

    let filereader = new FileReader();
    filereader.readAsArrayBuffer(file)
    filereader.onload = () =>{
      let data = filereader.result;
      let workbook = xls.read(data, {type: 'array'})

      const nameSheet = workbook.SheetNames[0];
      const hoja = workbook.Sheets[nameSheet];
      this.datos = xls.utils.sheet_to_json(hoja, {raw: true})
      console.log(this.datos)
    }
  }

   guardar(){
      this.datos.forEach(obj => {
        // console.log("El forEach " + obj);
        this.servicio.medicosG(obj).subscribe(resp =>{
          console.log('Respuesta',resp)
        })
      });
      this.servicio.medicos.subscribe((resp) => {
        // this.datos = resp;
        console.log('lista', resp)
      });
  }

}
