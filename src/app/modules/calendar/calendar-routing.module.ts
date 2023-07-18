import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

const routes: Routes = [
  { path: 'calendar', component: FullcalendarComponent, title: 'Calendario' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
