import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppService } from './app.service'
import { AppComponent } from './app.component';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { DialogModule } from './modules/dialog/dialog.module';

import { RegisterFormModule } from './modules/register-form/register-form.module';
import { RegisterFormComponent } from './modules/register-form/register-form.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactListModule,
    DialogModule,
    RegisterFormModule,
    RouterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
