import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.test.html',
  styles: [`
  .container {
    margin-top: 30px;
  }`],
  providers: [ UserService ]
})
export class AppComponent {

}
