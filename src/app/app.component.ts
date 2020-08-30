import {Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    courses = COURSES;

    @ViewChild('cardRef1')
    card1: CourseCardComponent;

    @ViewChild('cardRef2')
    card2: CourseCardComponent;

    onCourseSelected(course: Course) {
        console.log('Course_id:', course.id);
        console.log('card1', this.card1);
        console.log('card2', this.card2);
    }
}
