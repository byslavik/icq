import { API_URL, ENDPOINTS } from '../app.constants'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service'

@Injectable()

export class ApiService {
  
  constructor(private http: HttpClient, private appService: AppService){ }

  private generateHttpOptions = (token) => ({
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': token
    })
  });

  postRequest(type: string, payload: any) {
    return this.http.post(API_URL + ENDPOINTS[type], payload, this.generateHttpOptions(this.appService.getToken()))
  }

  getRequest(type: string) {
    return this.http.get(API_URL + ENDPOINTS[type], this.generateHttpOptions(this.appService.getToken()))
  }
    
  registerUser(payload) {
    return this.postRequest('register', payload)
  } 

  loginUser(payload) {
    return this.postRequest('logIn', payload)
  }
  getCurrentUser() {
    return this.getRequest('currentUser')
  }
  getAllUsers() {
    return this.getRequest('allUsers')
  }
  addUserToContacts(payload) {
    return this.postRequest('addUserToContacts', payload)
  }
}