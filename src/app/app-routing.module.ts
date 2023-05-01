import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { EquipoComponent } from './components/equipo/equipo.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mercado', component: MercadoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'equipo', component: EquipoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }