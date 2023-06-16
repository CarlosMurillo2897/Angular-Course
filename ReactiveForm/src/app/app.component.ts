import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .container {
      margin-top: 30px;
    }
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
  `]
})
export class AppComponent implements OnInit {
  genders: string[] = [ 'female', 'male' ];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [ Validators.required, Validators.email ]),
      'gender': new FormControl('male'),
    });
  }
  onSubmit() {
    console.log(this.signupForm);

  }
}
