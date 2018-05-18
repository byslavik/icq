import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactsService } from './contact-list.service'
import { AppService } from '../../app.service'

const appRoutes: Routes = [
  {
    path: 'home',
    component: ContactListComponent
  }
];

@NgModule({
  declarations: [
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ContactListComponent],
  providers: [ContactsService, AppService],
  bootstrap: []
})
export class ContactListModule { }
