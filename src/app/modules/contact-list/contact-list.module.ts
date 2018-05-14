import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }   from '@angular/common/http';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactsService } from './contact-list.service'
import { AppService } from '../../app.service'


@NgModule({
  declarations: [
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [ContactListComponent],
  providers: [ContactsService, AppService],
  bootstrap: [ContactListComponent]
})
export class ContactListModule { }
