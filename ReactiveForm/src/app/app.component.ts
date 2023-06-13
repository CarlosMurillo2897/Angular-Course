import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .container {
      margin-top: 30px;
    }
  `]
})
export class AppComponent {
  genders: string[] = [ 'female', 'male' ];
  signupForm: FormGroup;
}
