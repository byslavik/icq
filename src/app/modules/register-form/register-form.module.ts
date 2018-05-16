import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppService } from '../../app.service'
import { ApiService } from '../../services/api.servise'

import { RegisterFormComponent } from './register-form.component'
import { FieldComponent } from '../../components/field/field.component'

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent,
    data: { title: 'Heroes List' }
  }
];

@NgModule({
  declarations: [
    RegisterFormComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RegisterFormComponent],
  providers: [AppService, ApiService],
  bootstrap: [RegisterFormComponent]
})

export class RegisterFormModule { }
