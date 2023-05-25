import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: '<p>Even - {{ number }}</p>',
  styles: [`p {
    color: green;
  }`]
})
export class EvenComponent {
  @Input() number: number;
}
