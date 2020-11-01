import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private courseService: CoursesService) {
        console.log("root component " +  this.courseService.id);

    }

    ngOnInit() {
        this.courses$ = this.courseService.loadCourses();
    }

    save(course: Course) {
        this.courseService.saveCourse(course)
            .subscribe(
                () => console.log('Course saved!')
            );
    }
}
