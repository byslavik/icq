import { Component, Input } from '@angular/core';
import Contact from '../../../../models/contact.model'

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() data: Contact
}
