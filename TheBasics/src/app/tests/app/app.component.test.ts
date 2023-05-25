import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.test.html',
})
export class AppComponent {
  title = 'TheBasics';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    firedNumber % 2 === 0 ?
      this.evenNumbers.push(firedNumber) :
      this.oddNumbers.push(firedNumber);
  }
}
