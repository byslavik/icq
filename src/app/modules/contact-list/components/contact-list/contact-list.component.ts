import { Component, OnInit } from '@angular/core';
import Contact from '../../../../models/contact.model'
import { ContactsService } from '../../contact-list.service'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  contacts: Contact[]

  constructor(private contactsService: ContactsService) {}
      
  ngOnInit() {
    this.contactsService.loadContacts().subscribe((data: Contact[]) => this.contacts = data)
  }
}
