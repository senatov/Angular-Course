import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular Core'
  };

  onLogoClicked(): void {
    alert('Hello, world!');
  }

  onKeyUp(newTitle: string): void {
    this.data.title = newTitle;
  }
}
