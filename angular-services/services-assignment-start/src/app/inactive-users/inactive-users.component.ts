import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  public inActiveUsers: string[];

  constructor(private usersService: UsersService) {
    this.inActiveUsers = this.usersService.inActiveUsers;
  }

  onSetToActive(index: number) {
    this.usersService.onSetActiveUsers(index);
  }
}
