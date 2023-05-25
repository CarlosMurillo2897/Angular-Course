import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native.
})
export class ServerElementComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {
    this.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
    console.log(changes);
    
  }
  ngDoCheck(): void {
    this.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
  ngOnInit(): void {
    this.log('ngOnInit');
  }
  log(methodName): void {
    console.log(`${methodName} Init!`);
  }
}
