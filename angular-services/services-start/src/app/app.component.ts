import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public accounts = [];

  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.accounts;
  }
}
