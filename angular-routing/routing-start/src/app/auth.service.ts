import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    
    public isLoggedIn: boolean = false;

    isAuthenticated() {
        return new Promise<boolean>((resolve, reject) => {
            console.log("Logging In");
            setTimeout(() => resolve(this.isLoggedIn), 1000);
        });
    }

    login() {
        this.isLoggedIn = true;
        alert("Logged in successfully !!");
    }

    logout() {
        this.isLoggedIn = false;
        alert("Logged out successfully !!");
    }
}