import {Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input()
  course: Course;


  @Input()
  cardIndex: number;


  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(private coursesService: CoursesService,
              @Attribute('type') private attrType: string,
              private cd: ChangeDetectorRef) {

    console.log('attrType:=' + attrType);
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
