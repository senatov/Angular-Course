import {Component, Input, OnInit, Output} from '@angular/core';
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


  constructor() {
  }

  ngOnInit(): void {

  }

}
