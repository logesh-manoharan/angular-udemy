import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  public activeUsers: string[];

  constructor(private usersService: UsersService) {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(index: number) {
    this.usersService.onSetInActiveUsers(index);
    console.log("Setting user as " + this.usersService.activeUsers[index] + " InActive");
  }
}
