import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RespiradorComponent } from './pages/respirador/respirador.component';
import { HeaderTableComponent } from './components/header-table/header-table.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './pages/forms/nuevo-usuario/nuevo-usuario.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RespiradorComponent,
    HeaderTableComponent,
    HeaderComponent,
    HomeComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
