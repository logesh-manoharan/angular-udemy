import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public activeUserId: number;
  public activeUser: {id: number, name: string};

  constructor(private usersService: UsersService, private activeRoute: ActivatedRoute) {
    // fetching the param 'id' from the route path
    activeRoute.params.subscribe((params: Params) => this.activeUserId = params["id"]);

    this.activeUser = this.usersService.getUserById(this.activeUserId);
    console.log("Active User : " + JSON.stringify(this.activeUser));
  }

  ngOnInit() {
  }

}
