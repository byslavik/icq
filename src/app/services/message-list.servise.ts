import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class ContactsService {
  
    constructor(private http: HttpClient){ }
      
    getContacts(){
        return this.http.get('/mocks/contacts.json')
    }

    loadDialog(from: String, to: String) {
    }
}