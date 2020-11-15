import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnInit} from '@angular/core';
import {AppConfig, CONFIG_TOKEN} from './config';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit, DoCheck {

  courses: Course[];
  loaded = true;

  constructor(private courseService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig,
              private cd: ChangeDetectorRef) {
  }

  ngDoCheck(): void {

    console.log("ngDoCheck()")
    if (this.loaded) {
      console.log("consoleAPICalled cd.markforcheck() ");
      this.cd.markForCheck();
      this.loaded = undefined;
    }
  }

  ngOnInit() {
    this.courseService.loadCourses().subscribe(courses => {
      this.courses = courses;
      this.loaded = true;
    });
  }


  onEditCourse() {
  }

  save(course: Course) {
    this.courseService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

}
