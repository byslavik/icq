import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserInfo from './models/userInfo.model'
import Dialog from './models/dialog.model'

@Injectable()

export class AppService {
  
    private userInfo: UserInfo = {
      userId: ""
    }

    private currentDialog: Dialog = {
      from: "",
      to: ""
    }
      
    setUser(newUser: UserInfo){
      this.userInfo = newUser
    }

    getUser(){
      return this.userInfo
    }
}