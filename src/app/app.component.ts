import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';
import {APP_CONFIG, AppConfig, CONFIG_TOKEN} from './config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private courseService: CoursesService,
                @Inject(CONFIG_TOKEN) private config: AppConfig) {
        console.log('Configuration obj: ' + config);
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
