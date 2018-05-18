import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppService } from '../../app.service'
import { ApiService } from '../../services/api.servise'

import { RegisterFormComponent } from './components/register-form/register-form.component'
import { LoginFormComponent } from './components/login-form/login-form.component'

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  }
];

@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [],
  providers: [AppService, ApiService],
  bootstrap: []
})

export class RegisterFormModule { }
