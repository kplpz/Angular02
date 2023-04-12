import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { BinDingComponent } from './pages/bin-ding/bin-ding.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';

const routes: Routes = [
  {path : '', component : HomeComponent, title : 'Home'},
  {path : 'ngIf', component : NgIFComponent, title : 'ngIf' },
  {path : 'ngFor', component : NgForComponent, title : 'ngFor' },
  {path : 'ngSwitch', component : NgSwitchComponent, title : 'ngSwitch' },
  {path : 'ngStyle', component : NgStyleComponent, title : 'ngStyle' },
  {path : 'ngClass', component : NgClassComponent, title : 'ngClass' },
  {path : 'binDing', component : BinDingComponent, title : 'binDing' },
  {path : 'ngModel', component : NgModelComponent, title :  'ngModel'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
