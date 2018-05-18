import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.servise'

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username: string
  password: string
  name: string
  email: string
  message: string

  constructor(private api:ApiService ) {
  }

  register(){
    const data = {
      username: this.username,
      password: this.password,
      name: this.name,
      email: this.email
    }
    this.api.registerUser(data).subscribe((res: any)=> this.message = res.msg)
  }

}
