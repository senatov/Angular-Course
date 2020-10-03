import {Directive} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[highlighted]'
})
export class HighlightedDirective {

    constructor() {
        console.log('directive created..');

    }

}
