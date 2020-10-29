import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';
import {HttpClient} from '@angular/common/http';


function coursesServiceProvider(http: HttpClient): CoursesService {
    return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        {
            provide: COURSES_SERVICE,
            useFactory: coursesServiceProvider,
            deps: [HttpClient]
        }
    ]
})
export class AppComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(
        @Inject(COURSES_SERVICE) private courseService: CoursesService) {

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
