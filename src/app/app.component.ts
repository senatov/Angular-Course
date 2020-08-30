import {Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    courses = COURSES;

    @ViewChild('cardRef1', {read: ElementRef})
    card1: ElementRef;


    @ViewChild('container')
    containerDiv: ElementRef;


    constructor() {
        console.log('ContaineruDiv:', this.card1);
    }

    onCourseSelected(course: Course) {
        console.log('ContaineruDiv:', this.card1);
    }
}
