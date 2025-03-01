import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  public editingServerId: number;
  public isEditAllowed: boolean = false;
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => { 
      this.editingServerId = params["id"];
      
      console.log("Editing Server ID : " + this.editingServerId);
      this.server = this.serversService.getServer(this.editingServerId);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      console.log("Editing Server : " + JSON.stringify(this.server));
    });

    // Edit Access Restriction
    this.activeRoute.queryParams.subscribe((queryParams: Params) => {
      this.isEditAllowed = queryParams["isEditAllowed"];
      console.log("Is Edit Allowed : " + this.isEditAllowed);
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
