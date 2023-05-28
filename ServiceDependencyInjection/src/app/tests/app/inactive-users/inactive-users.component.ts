import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/users.service";

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html'
})

export class InactiveUsersComponent implements OnInit {
    users: string[];
    constructor(private userService: UserService) {
    }
    ngOnInit(): void {
        this.users = this.userService.inactiveUsers;
    }
    onSetToActive(id: number) {
        this.userService.setToActive(id);
    }
}