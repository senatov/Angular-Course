import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    // tslint:disable-next-line:no-output-rename
    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();

    constructor() {
    }

    ngOnInit(): void {

    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {
        console.log('card component - button clicked!');
        this.courseEmitter.emit(this.course);
    }


    cardClasses() {

        if (this.course.category === 'BEGINNER') {
            return ['beginner'];
        }
    }

    cardStyles() {
        // tslint:disable-next-line:no-unused-expression
        return {
            'background-image': 'url(' + this.course.iconUrl + ')'
        };
    }
}
