import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { DialogComponent } from './components/dialog-component/dialog-component.component';
import { MessageComponent } from './components/message/message.component';
import { MessageTextBoxComponent } from './components/message-text-box/message-text-box.component';

import { DialogService } from './dialog.service'
import { AppService } from '../../app.service'


@NgModule({
  declarations: [
    DialogComponent,
    MessageComponent,
    MessageTextBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [DialogComponent],
  providers: [DialogService, AppService],
  bootstrap: [DialogComponent]
})
export class DialogModule { }
