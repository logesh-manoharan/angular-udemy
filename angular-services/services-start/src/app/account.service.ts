import { EventEmitter, Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

// To inject LoggerService inside AccountService. @Injectable is needed
@Injectable({
    providedIn: "root"
})
export class AccountService {
    public accounts = [];

    public statusUpdated = new EventEmitter<string>();

    constructor(private loggerService: LoggerService) {
        this.accounts = [
            {
                name: 'Master Account',
                status: 'active'
            },
            {
                name: 'Testaccount',
                status: 'inactive'
            },
            {
                name: 'Hidden Account',
                status: 'unknown'
            }
        ];
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accounts.push({
            name: accountName,
            status: accountStatus
        });
        this.loggerService.logCreateAccount(accountName, accountStatus);  // Logging Account Creation
    }

    onStatusChanged(index: number, newStatus: string) {
        this.accounts[index].status = newStatus;
        this.loggerService.logStatusChange(newStatus); // Logging status change
    }
}