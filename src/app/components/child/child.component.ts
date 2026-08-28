import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  text: string = 'Какой-то текст';
  name: string = 'Какой-то нэйм';
}
