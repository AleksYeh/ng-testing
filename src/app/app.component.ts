import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Заголовок';
  name: string = 'Имя';

  constructor() {
    setTimeout(() => {
      this.title = 'Другой заголовок';
    }, 3000);
  }
}
