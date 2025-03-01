import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service';

/*
    Nothing but a service that implements 'canActivate' interface
*/

@Injectable({
    providedIn: "root",  // no need to add this Service inside 'providers:[]'. This will in AppModule providers: []
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        /* Our own logic */
        return this.authService.isAuthenticated().then((authenticated: boolean) => {
            if(authenticated) {
                return true;
            } else {
                alert("Please logic to continue !!");
                this.router.navigate(["/"]);
                return false;
            }
        });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute, state);
    }
}