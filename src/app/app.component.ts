import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {COURSES} from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    courses = COURSES;

    courses$: Observable<Course[]>;

    constructor(private courseService: CoursesService,
                @Inject(CONFIG_TOKEN) private config: AppConfig) {
    }

    ngOnInit() {

    }

    save(course: Course) {
        this.courseService.saveCourse(course)
            .subscribe(
                () => console.log('Course saved!')
            );
    }
}
