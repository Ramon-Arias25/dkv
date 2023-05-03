import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { IFrameTemplateComponent } from './components/i-frame-template/i-frame-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MercadoComponent,
    ClienteComponent,
    MarketingComponent,
    EquipoComponent,
    IFrameTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'i-frame/:numero', component: IFrameTemplateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
