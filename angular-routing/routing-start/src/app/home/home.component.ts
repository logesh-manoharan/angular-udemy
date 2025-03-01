import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService) { 
  }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login();
  }

  doLogout() {
    this.authService.logout();
  }

}
