import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.btn-secondary') isOpen = false;

    @HostListener('mouseout') toggleOpen2() {
        this.isOpen = false;
    }
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
    constructor(private elementRef: ElementRef) {}
}