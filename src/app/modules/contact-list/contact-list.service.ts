import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
import Contact from '../../models/contact.model'

@Injectable()

export class ContactsService {
  
  constructor(private http: HttpClient){ }
    
  loadContacts() {
      return this.http.get('/mocks/contacts.json')
  }
}