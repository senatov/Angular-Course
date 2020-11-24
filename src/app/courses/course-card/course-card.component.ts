import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {Course} from '../../model/course';
import {CoursesService} from '../courses.service';


@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges,
    AfterContentChecked, AfterViewChecked,
    AfterContentInit, AfterViewInit, DoCheck {

    @Input()
    course: Course;


    @Input()
    cardIndex: number;


    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string) {

        console.log('constructor:', this.course);
    }

    ngDoCheck(): void {
        console.log('ngDoCheck():');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit():');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterViewInit():');
    }

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked():');
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked():');
    }

    ngOnChanges(changes): void {
        console.log('ngOnChanges():', changes);
    }

    ngOnInit() {
        console.log('ngOnInit():', this.course);
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy()');
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }
}

