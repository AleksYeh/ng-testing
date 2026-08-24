import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() title!: string;
  @Input() name!: string;

  constructor() {
    console.log(
      '%c Компонент app-child успешно создан!',
      'background: darkgreen'
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c ngOnchanges', 'color: aqua');
    console.log('changes', changes);
  }
  // ngOnInit(): void {
  //   console.log('%c ngOninit', 'color: deepskyblue');
  // }
  // ngDoChek(): void {
  //   console.log('%c ngDoCheck', 'color: pink');
  // }
  // ngArfetContentInit(): void {
  //   console.log('%c ngArfetContentInit', 'color: lightgreen');
  // }
  // ngArfetContentChecked(): void {
  //   console.log('%c ngArfetContentChecked', 'color: green');
  // }
  // ngArfetViewInit(): void {
  //   console.log('%c ngArfetViewInit', 'color: yellow');
  //   setTimeout(() => console.log('title внутри  setTimeout'));
  // }
  // ngArfetViewChecked(): void {
  //   console.log('%c ngArfetViewChecked', 'color: orange');
  // }
  // ngOnDestroy(): void {
  //   console.log('%c ngOnDestroy', 'color: red');
  // }
}
