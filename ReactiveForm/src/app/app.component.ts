import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .container {
      margin-top: 30px;
    }
  `]
})
export class AppComponent implements OnInit {
  genders: string[] = [ 'female', 'male' ];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male'),
    });
  }
  onSubmit() {
    console.log(this.signupForm);

  }
}
