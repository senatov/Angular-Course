import {Component, Inject, OnInit} from '@angular/core';
import {COURSES} from "../db-data";
import {AppConfig, CONFIG_TOKEN} from './config';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  courses: Course[] = COURSES;

  constructor(private courseService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig) {
  }


  ngOnInit() {
    this.courseService.loadCourses().subscribe(courses => {
      this.courses = courses;
    });
  }


  onEditCourse() {
    this.courses = [undefined];
  }

  save(course: Course) {
    this.courseService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
