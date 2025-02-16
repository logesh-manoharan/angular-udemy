import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public activeUsers:string[] = ["Logesh", "Vasanth"];
    public inActiveUsers: string[] = ["Suresh", "Mani"];

    onSetActiveUsers(index: number) {
        this.activeUsers.push(this.inActiveUsers[index]);
        this.inActiveUsers.splice(index, 1);
    }

    onSetInActiveUsers(index: number) {
        this.inActiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
    }
}