import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./Componentes/home-page/home-page.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {RegistroLoginComponent} from "./Componentes/registro-login/registro-login.component";
const routes: Routes = [
  { path: 'Login', component: LoginComponent }, // Removed the slash
  { path: 'RegistroLogin', component: RegistroLoginComponent }, // Removed the slash
  { path: 'LoginAcesso', component: LoginComponent }, // Removed the slash

  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
