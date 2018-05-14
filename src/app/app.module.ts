import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service'
import { AppComponent } from './app.component';
import { ContactListModule } from './modules/contact-list/contact-list.module';
import { DialogModule } from './modules/dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContactListModule,
    DialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
