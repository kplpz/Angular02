import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule } from 'ngx-bootstrap/modal'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FullcalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalendarModule { }
