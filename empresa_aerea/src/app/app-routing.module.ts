import 'tslib';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ReservaComponent } from './reserva/reserva.component';
import { TicketComponent } from './ticket/ticket.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  {
    path:'',component: HomeComponent,
    children:[
      {path:'inicio',component: InicioComponent},
      {path:'login',component: LoginComponent},
      {path:'registrar',component:RegistrarseComponent},
      {path:'reserva',component:ReservaComponent},
      {path:'ticket',component:TicketComponent}
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
