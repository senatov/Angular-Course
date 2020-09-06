import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CourseCardComponent} from './course-card/course-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';
import {CourseImageComponent} from './course-image/course-image.component';

@NgModule({
    declarations: [
        AppComponent,
        CourseCardComponent,
        CourseImageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        CdkTableModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
