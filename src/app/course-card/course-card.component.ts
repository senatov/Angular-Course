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

  @Output('courseSelected')
  courseSelected = new EventEmitter<Course>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log('onCourseViewed() - \'View Course\' button  clicked');
    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
}
