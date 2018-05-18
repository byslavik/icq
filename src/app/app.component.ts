import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { ApiService } from './services/api.servise'
import { docCookies } from './helpers/cookies'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private appService: AppService, private api: ApiService, private router: Router){}

  userName: String

  ngOnInit() {
    const token = docCookies.getItem('authorization');
    if(token) {
      this.appService.setToken(token)
      this.api.getCurrentUser().subscribe((res: any) => {
        if(!res.success) { return }
        this.appService.setUser(res.user)
        this.userName = res.user.user.name
      })
    } else {
      this.router.navigate(['login'])
    }
  }

}
