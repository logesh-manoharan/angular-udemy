import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";


/*
In this file, we are creating bond between the Guard and the Component
*/
export interface CanDeactivateComponent {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
    providedIn: "root"
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(component: CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.canDeactivate();
    }
}