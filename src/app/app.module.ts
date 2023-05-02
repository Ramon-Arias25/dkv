import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { EquipoComponent } from './components/equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MercadoComponent,
    ClienteComponent,
    MarketingComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
