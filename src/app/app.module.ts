import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import localeEsMX from '@angular/common/locales/es-MX';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { LoginComponent } from './pages/login/login.component';
import { RespiradorComponent } from './pages/respirador/respirador.component';
import { HeaderTableComponent } from './components/header-table/header-table.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './pages/forms/nuevo-usuario/nuevo-usuario.component';
import { DialogComponent } from './components/dialog/dialog.component';

registerLocaleData(localeEsMX, 'es-Mx');

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [DatePipe,{ provide: LOCALE_ID, useValue: 'es-Mx' }],
  bootstrap: [AppComponent],
  entryComponents: [
    NuevoUsuarioComponent
  ]
})
export class AppModule { }
