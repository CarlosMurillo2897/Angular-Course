import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user with <b>ID {{ id }}</b> was loaded
    </p>
    <button class="btn btn-primary" (click)="onActivate()">Activate</button>
  `,
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => (this.id = +params.id));
  }

  onActivate() {
    this.userService.activatedEmitter.next(true);
  }
}
