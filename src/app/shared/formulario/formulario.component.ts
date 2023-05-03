import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPais } from '@shared/interfaces/pais.interface';
import { UbicacionPaisService } from '@shared/services/ubicacion-pais.service';
import { map } from 'rxjs';
import { EMAIL_VALIDATE, NAME_VALIDATE, NUMBER_VALIDATE } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formularioGeneral!: FormGroup

  private isEmail: string = EMAIL_VALIDATE
  private isName: string = NAME_VALIDATE
  private isMoney: string = NUMBER_VALIDATE
  private isDate: string = ''
  public departamentos!: IPais[]
  public municipios!: IPais[]
  public cantones!: IPais[]

  constructor(

    private ubicacionPais: UbicacionPaisService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario()
    this.llenarComboDepartamentos()
  }

  guardar() {
    if (this.formularioGeneral.valid) {
      Swal.fire({
        position: 'center',
        title: 'Buen trabajo',
        text: 'submit disparado , formulario es valido',
        icon: 'info'
      })
      console.log(this.formularioGeneral.value)
    } else {
      Swal.fire({
        position: 'center',
        title: 'Faltan datos en el formulario',
        text: 'submit disparado , formulario no valido',
        icon: 'warning'
      })

      return Object.values(this.formularioGeneral.controls)
        .forEach(control =>
          control.markAsTouched())
    }
  }

  private iniciarFormulario(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.isName)]],
      apellido: ['', [Validators.required, Validators.pattern(this.isName)]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      genero: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.pattern(this.isDate)]],
      mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.pattern(this.isMoney), Validators.min(300.00)]],


      //agregado para grupos
      direccion :this.fb.group({
        ubicacion: ['',[]],
        colonia:['',[Validators.nullValidator]],
      }),
      gustos : this.fb.group({
        verde: ['',[]],
        rojo:['',[]],
        negro:['',[]],
      }),
      estado:['',[]],
      pasatiempos: this.fb.array([]),
    })
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formularioGeneral.get(campo)
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid' : validarCampo?.touched ? 'is-valid' : ''
  }
// PARA LLENAR LOS COMBO POR MEDIO DE UN JSON
  llenarComboDepartamentos(){
    this.ubicacionPais.getDepa()
    .pipe(map((dp:any) => dp.filter((depa:any) => depa.codigo.length ===2)))
    .subscribe((resp:any) =>{
      this.departamentos = resp
    })
  }

  deptoChange(id:string):void{
    this.ubicacionPais.getDepa()
    .pipe(map(dp =>
      dp.filter(muni =>muni.codigo.startsWith(id) && muni.codigo.length ==4)))
      .subscribe(resp =>{
        this.municipios = resp
      })
  }
  muniChange(id:string):void{
    this.ubicacionPais.getDepa()
    .pipe(map(dp =>
      dp.filter(canton =>canton.codigo.startsWith(id) && canton.codigo.length ==6)))
      .subscribe(resp =>{
        this.cantones = resp
      })
  }
  //FIN DE COMBOS

  noRequiereValor(campo:string):string{
    return this.formularioGeneral.get(campo)?.value ? 'is-valid' : ''
  }

  get pasatiempos(){
    return this.formularioGeneral.get('pasatiempos') as FormArray
  }

  agregarPasatiempo(){
    this.pasatiempos.push(this.fb.control('',Validators.required))
  }

  borrarPasatiempo(i: number){
    this.pasatiempos.removeAt(i)
  }
}
