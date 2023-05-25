import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: '<p>Odd - {{ number }}</p>',
  styles: [`p {
    color: blue;
  }`]
})
export class OddComponent {
  @Input() number: number;
}
