import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[highlighted]'
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
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
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouselive() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }
}
