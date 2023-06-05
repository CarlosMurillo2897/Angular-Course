import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `<h3>Yay I'm home!</h3>`,
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  ngOnInit(): void {
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
