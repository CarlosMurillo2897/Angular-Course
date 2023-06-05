import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  template: '<p>user with <b>ID {{ id }}</b> was loaded</p>',
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);

        this.id = +params.id;
      });
  }
}
