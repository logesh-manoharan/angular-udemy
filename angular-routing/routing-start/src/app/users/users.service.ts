import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    public users: { id: number, name: string}[] = [
        {
          id: 1,
          name: 'Max'
        },
        {
          id: 2,
          name: 'Anna'
        },
        {
          id: 3,
          name: 'Chris'
        }
    ];

    getUserById(id: number) {
        return this.users[this.users.findIndex(user => user.id == id)];
    }

}