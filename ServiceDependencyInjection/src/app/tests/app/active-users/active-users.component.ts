import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/users.service";

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent implements OnInit {
    users: string[];
    constructor(private userService: UserService) {
    }
    ngOnInit(): void {
        this.users = this.userService.activeUsers;
    }
    onSetToInactive(id: number) {
        this.userService.setToInactive(id);
    }
}