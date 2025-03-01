import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  public activeServerId: number;
  public activeServer: {id: number, name: string, status: string};
  public isEditAllowed: boolean;


  constructor(private serversService: ServersService, 
    private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.activeServerId = params["id"];
      this.activeServer = this.serversService.getServer(this.activeServerId);
      console.log("Active Server : " + JSON.stringify(this.activeServer));

      // enabling edit only for id=3
      this.isEditAllowed = this.activeServerId == 3;
    });
  }

  onEditServer() {
    // Adding the /edit path to the existing path.
    this.router.navigate(["edit"], {
      queryParams: {
        isEditAllowed: this.isEditAllowed
      },
      relativeTo: this.activeRoute,
    });
  }

}
