import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public activeServerId: number;
  public activeServer: {id: number, name: string, status: string};


  constructor(private serversService: ServersService, 
    private activeRoute: ActivatedRoute) {
      this.activeRoute.params.subscribe((params: Params) => this.activeServerId = params["id"]);
  }

  ngOnInit() {
    console.log("Active Server Id: " + this.activeServerId);
    this.activeServer = this.serversService.getServer(this.activeServerId);
    console.log("Active Server : " + JSON.stringify(this.activeServer));
  }

}
