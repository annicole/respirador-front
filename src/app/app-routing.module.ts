import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';
import {LoginComponent} from './pages/login/login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import {RespiradorComponent} from './pages/respirador/respirador.component';
import {HomeComponent} from './pages/home/home.component';


const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'usuario',component:UsuariosComponent,canActivate: [AuthGuard] },
  {path:'home',component:HomeComponent,canActivate: [AuthGuard] },
  {path:'login',component:LoginComponent },
  {path:'respirador',component:RespiradorComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
