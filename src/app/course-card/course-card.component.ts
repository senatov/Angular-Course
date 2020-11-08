import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

let counter = 0;

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    id: number;

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService) {
        counter++;
        this.id = counter;
    }

    ngOnInit() {
    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }

    onTitleChanged(newTitle: string) {
        console.log("title changed on: " + newTitle);
        this.course.description = newTitle;
    }
}
