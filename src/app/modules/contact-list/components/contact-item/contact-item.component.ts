import { Component, Input } from '@angular/core';
import UserInfo from '../../../../models/userInfo.model'
import { ApiService } from '../../../../services/api.servise'

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {

  constructor (private api: ApiService) {}

  @Input() data: UserInfo

  addUserToContacts(id:string) {
    this.api.addUserToContacts({ contactId: id })
  }
}
