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
    }

    ngAfterViewInit(): void {
    }

    ngAfterContentInit(): void {
    }

    ngAfterViewChecked(): void {
    }

    ngAfterContentChecked(): void {
    }

    ngOnChanges(changes): void {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }


    onSaveClicked(description: string) {

        this.courseEmitter.emit({...this.course, description});

    }
}

