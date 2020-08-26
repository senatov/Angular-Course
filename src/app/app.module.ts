import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CourseCardComponent} from './course-card/course-card.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
    declarations: [
        AppComponent,
        CourseCardComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        CdkTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
