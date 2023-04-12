import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RedireccionComponent } from './modules/redireccion/redireccion.component';
import { MascotaComponent } from '@modules/mascotas/pages/mascota/mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,
    RedireccionComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
