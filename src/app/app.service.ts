import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import UserInfo from './models/userInfo.model';
import Dialog from './models/dialog.model';

@Injectable()

export class AppService {
  //user info
  private userInfo: UserInfo = {
    _id: "",
    username: "",
    name: "",
    contacts: []
  }
  
  setUser(newUser: UserInfo){
    this.userInfo = newUser
  }

  getUser(){
    return this.userInfo
  }

  // token info
  private token: string = ''
  
  setToken(token: string){
    this.token = token
  }

  getToken(){
    return this.token
  }

  // dialogs
  private currentDialog: Dialog = {
    from: "",
    to: ""
  }

  // alerts

  // loading indicator
}