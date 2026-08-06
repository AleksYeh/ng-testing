import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing';

  user = {
    age: '27',
    name:  'Yura',
  }

  tooltip = 'Я подсказка для ссылки'

  inlineStyles = {
    width: '50%',
    background: 'green'
  }

  cssClass = 'blue'

  someNumber = 70
}
