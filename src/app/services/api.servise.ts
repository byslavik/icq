import { API_URL, ENDPOINTS } from '../app.constants'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AppService } from '../app.service'

@Injectable()

export class ApiService {
  
    constructor(private http: HttpClient, private appService: AppService){ }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.appService.getToken()
      })
    };

    postRequest(type: string, payload: any) {
      return this.http.post(API_URL + ENDPOINTS[type], payload, this.httpOptions)
    }

    getRequest(type: string, payload: any) {
      return this.http.get(API_URL + ENDPOINTS[type], this.httpOptions)
    }
      
    registerUser(payload) {
      return this.postRequest('register', payload)
    } 

    loginUser(username: String, password: String) {
      return this.postRequest('logIn', { username, password })
    }
}