import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { AuthGuard } from "./auth-guard.service";


const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent,
      children: [
        {
          path: ":id",
          component: UserComponent
        } 
      ]
    },
    {
      path: 'servers',
      component: ServersComponent,
      canActivateChild: [AuthGuard],
      children: [
        {
          path: ":id",
          component: ServerComponent
        },
        {
          path: ":id/edit",
          component: EditServerComponent
        }
      ]
    },
    {
      path: "not-found",
      component: PageNotFoundComponent
    },
    {
      path: "**",
      redirectTo: "/not-found",
      pathMatch: "full"   // it checks the path defined was excatly in the route path. if yes, then re-directs to /not-found
    }
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]  // deciding which part of this module can be used by other modules
})
export class AppRoutingModule {

}