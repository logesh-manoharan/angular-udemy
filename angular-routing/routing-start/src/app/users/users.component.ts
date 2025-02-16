import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: any[];

  constructor(private usersService: UsersService) {
    this.users = this.usersService.users;
  }
}
