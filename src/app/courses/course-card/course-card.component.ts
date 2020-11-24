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
        this.course.description = 'ngAfterContentChecked';
        this.course.category = 'ADVANCED';
    }

    ngOnChanges(changes): void {
        console.log('ngOnChanges():', changes);
        this.course.description = 'ngAfterViewChecked';
        this.course.iconUrl = 'https://static3.die-tagespost.de/storage/image/2/0/9/5/65902_teaser-320x180_1vJC2g_198xVp.jpg';
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

