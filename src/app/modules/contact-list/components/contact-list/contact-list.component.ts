import { Component, OnInit } from '@angular/core';
import UserInfo from '../../../../models/userInfo.model'
import { AppService } from '../../../../app.service'
import { ApiService } from '../../../../services/api.servise'

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  currentUser: UserInfo
  myContacts: UserInfo[]
  allContacts: UserInfo[]
  isMyContact: Boolean = false

  constructor(private appService: AppService, private api: ApiService) {}
      
  ngOnInit() {
    this.currentUser = this.appService.getUser()
    this.myContacts = this.currentUser.contacts
    this.api.getAllUsers().subscribe((data: any) => {
      this.allContacts = data.allContacts;
      this.myContacts = data.myContacts
    })
  }

  changeContactTab(isChange){
    this.isMyContact = isChange
  }
}
