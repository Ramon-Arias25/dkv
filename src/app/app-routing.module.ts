import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { IFrameTemplateComponent } from './components/i-frame-template/i-frame-template.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mercado', component: MercadoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'iframe/:numero', component: IFrameTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }