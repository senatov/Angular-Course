import {
    AfterContentChecked,
    AfterViewChecked,
    Attribute,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';
import {Course} from '../model/course';
import {CoursesService} from '../services/courses.service';

let counter = 0;

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked {

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

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked():', this.course);
    }

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked():', this.course);
        this.course.description = 'ngAfterContentChecked';
        this.course.category = 'ADVANCED';
    }

    ngOnChanges(changes): void {
        console.log('ngOnChanges():', changes);
        this.course.description = 'ngAfterViewChecked';
        //this.course.iconUrl='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1bbesG.img?h=174&w=300&m=6&q=60&u=t&o=t&l=f&f=jpg&x=1011&y=778';
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

