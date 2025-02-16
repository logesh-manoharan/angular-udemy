import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    logCreateAccount(accountName: string, status: string) {
        console.log("Creating Account | Account Name : " + accountName + " Account Status : " + status);
    }

    logStatusChange(status: string) {
        console.log("Status Change | Status Message : " + status);    
    }
}