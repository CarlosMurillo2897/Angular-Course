import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
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
  // Without { static: true } it will throw an error OnInit method.
  @ViewChild('heading', { static: true }) header: ElementRef;

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
    console.log('Tex Content: ' + this.header.nativeElement.textContent);
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    this.log('ngOnInit');
  }
  log(methodName): void {
    console.log(`${methodName} Init!`);
  }
}
