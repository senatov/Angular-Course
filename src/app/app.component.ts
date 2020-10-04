import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    @ViewChild(CourseCardComponent)
    highLighled: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<ElementRef>;


    constructor() {
    }

    onToggle(isHighLighled: boolean) {
        console.log(isHighLighled);
    }

    ngAfterViewInit() {
    }

    onCourseSelected(course: Course) {

    }

}
