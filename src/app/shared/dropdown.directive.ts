import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') clicked:boolean=false;

    @HostListener('click') toggleOpen(eventData:Event) {
        this.clicked=!this.clicked;
    }

}