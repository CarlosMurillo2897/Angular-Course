import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `<h3>Yay I'm home!</h3>`,
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })
    const customIntervalObservable = new Observable(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if(count == 2) {
            observer.complete();
          }
          if(count > 3) {
            observer.error(new Error('Count is greater than 3!'));
          }
          count++;
        }, 1000);
      });

      const filterPipe = filter(
        (data: number) => data > 0
      );

      const mapPipe = map(
        (data: number) => 'Round: ' + (data + 1)
      );

      this.firstObsSubscription = customIntervalObservable
        .pipe(filterPipe, mapPipe)
        .subscribe(
          data => console.log(data),
          error => alert(error.message),
          () => console.log('Completed!')
        );
  }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
