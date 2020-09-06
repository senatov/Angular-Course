import {AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    // tslint:disable-next-line:no-output-rename
    @Output('courseSelected')
    courseEmitter = new EventEmitter<Course>();

    @ContentChild(CourseImageComponent, {read: ElementRef})
    image: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        console.log(this.image);
    }


    ngOnInit() {

    }

    isImageVisible() {
        return this.course && this.course.iconUrl;
    }

    onCourseViewed() {
        this.courseEmitter.emit(this.course);
    }


    cardClasses() {

        if (this.course.category === 'BEGINNER') {
            return ['beginner'];
        }
    }

    cardStyles() {
        return {
            'background-image': 'url(' + this.course.iconUrl + ')',
        };
    }
}

