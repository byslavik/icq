import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.servise'
import { AppService } from '../../../../app.service'
import { Router } from '@angular/router';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string
  password: string
  message: string
  constructor(private api:ApiService, private appService: AppService, private router: Router ) {
  }

  login(){
    const data = {
      username: this.username,
      password: this.password
    }
    this.api.loginUser(data).subscribe((res: any)=> {
      this.message = res.msg
      if(res.success){
        this.appService.setToken(res.token)
        this.appService.setUser(res.user)
        this.router.navigate(['/home'])
      }
    })
  }

}
