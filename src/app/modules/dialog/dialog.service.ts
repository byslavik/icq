import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Message from '../../models/message.model'
  
@Injectable()

export class DialogService {
  
    constructor(private http: HttpClient){ }
      
    getDialog(from: String, to: String) {
      return this.http.get(`/mocks/dialog.json?from=${from}&to=${to}`)
    }

    sendMessage(message: Message) {
      console.log(message)
      return this.http.post('/postService', message)
    }
}