import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {EventEmitter} from 'events';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[highlighted]'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    toggleHighlight = new EventEmitter();

    constructor() {
        console.log('directive created..');

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    mouseover($event) {
        console.log($event);
        this.isHighlighted = true;
    }

    @HostListener('mouseleave')
    mouselive() {
        this.isHighlighted = false;
    }
}
