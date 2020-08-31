import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

    courses = COURSES;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards: QueryList<ElementRef>;

    constructor() {
    }

    ngAfterViewInit() {
        console.log(this.cards);
    }

    onCourseSelected(course: Course) {
    }

    onCoursesEdited() {
        this.courses.push(
            {
                id: 5,
                description: 'Angular Security Course',
                longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
                iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
                category: 'ADVANCED',
                lessonsCount: 11
            }
        );

    }
}
