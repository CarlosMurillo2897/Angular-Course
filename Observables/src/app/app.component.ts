import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .container {
        margin-top: 30px;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      didActivate => this.userActivated = didActivate
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
