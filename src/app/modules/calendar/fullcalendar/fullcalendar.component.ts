import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calendar, CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.scss']
})
export class FullcalendarComponent {

  nuevoEvento: any
  modalRef?: BsModalRef
  formEvento !: FormGroup
  formEditEvento !: FormGroup
  editEvent: any ;
  calendarEvents: any[]=[]

  @ViewChild('templateNuevo') templateNuevo !: string;
  @ViewChild('templateEdit') templateEdit !: string;
  config = {
    animated: true
  }



  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEvento = this.fb.group({
      title: ['', [Validators.required]]
    })
    this.formEditEvento = this.fb.group({
      editTitle: ['', [Validators.required]]
    })
    // this.actualizar()
  }
  eventos: any = [
    {
      title: 'Aprender algo de Angular',
      date: '2023-07-28',
      color: '0000ff'
    },
    {
      id: '3',
      title: 'Probando fechas en calendar',
      start: new Date().setDate(new Date().getDate() + 1),
      end: new Date().setDate(new Date().getDate() + 6),
      className: 'bg-secondary bg-gradient text-white'
    }
  ]

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap',
    events: this.eventos,
    dateClick: this.openModal.bind(this),
    eventClick: this.handleEventClick.bind(this)
  }

  openModal(event: EventInput) {
    this.nuevoEvento = event;
    this.modalRef = this.modalService.show(this.templateNuevo, this.config)
  }

  guardarEvent() {
    if (this.formEvento.valid) {
      const title = this.formEvento.get('title')!.value;
      const calendar: Calendar = this.nuevoEvento["view"].calendar
      calendar.addEvent({
        id: '4',
        title: title,
        start: this.nuevoEvento.date,
        end: this.nuevoEvento.date,
        className: 'bg-danger bg-gradient text-white'
      })

      this.formEvento = this.fb.group({
        title:''
      })
    }
    this.closeEventoModal()
    this.modalRef?.hide()
  }

  closeEventoModal() {
    this.formEvento = this.fb.group({
      title:''
    })
    this.modalRef?.hide()
  }

  handleEventClick(datos: EventClickArg){
    this.editEvent = datos.event
    this.formEditEvento = this.fb.group({
      title:  `${datos.event.title}`,
    });
    this.modalRef = this.modalService.show(this.templateEdit, this.config)
  }

  guardarEdit(){
    const editTitle = this.formEditEvento.get('title')!.value
    const editId = this.calendarEvents.findIndex((x) =>{
      x.id + '' === this.editEvent.id + ''
    })
    this.editEvent.setProp('title' ,editTitle)

    this.calendarEvents[editId] = {
      ...this.editEvent,
      title: editTitle,
      id: this.editEvent.id,
      classNames: 'bg-danger bg-gradient text-white'
    }

    this.formEditEvento = this.fb.group({
      editTitle:'',
      editCategory: ''
    })
    this.modalRef?.hide()
  }
  // actualizar(){ }

  confirm(){
    Swal.fire({
      title:'Esta seguro?',
      text: 'No se podra revertir',
      icon: 'warning',
      showCancelButton:true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText:'Si, borrar',
    }).then((result) =>{
      if(result){
        this.deteleEventData()
        Swal.fire('Borrar', 'El evento fue borrado', 'success')
      }
    })
  }

  deteleEventData(){
    this.editEvent.remove()
    this.modalRef?.hide()
  }
}
