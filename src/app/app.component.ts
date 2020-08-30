import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

    courses = COURSES;

    @ViewChild('cardRef1', {read: ElementRef})
    card1: ElementRef;


    @ViewChild('courseImage')
    courseImage: ElementRef;


    constructor() {
    }

    ngAfterViewInit() {
        console.log('ContaineruDiv(ngAfterViewInit):', this.card1);
    }

    onCourseSelected(course: Course) {
    }


}
