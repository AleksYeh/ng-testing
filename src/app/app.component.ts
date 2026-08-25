import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Заголовок';
  name: string = 'Имя';
  toggler: boolean = true;

  obj = { age: 12 };

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Другой заголовок';
    //   // this.obj.age = 10;
    //   this.obj = { ...this.obj, age: 10 };
    // }, 3000);
    //   console.log(
    //     '%c Компонент app-root успешно создан!',
    //     'background: darkgreen'
    //   );
    // }
    // ngOnChanges(changes: SimpleChanges): void {
    //   console.log('%c родительский ngOnchanges', 'color: aqua');
    //   // console.log('changes', changes);
    // }
    // ngOnInit(): void {
    //   console.log('%c родительский ngOninit', 'color: deepskyblue');
    // }
    // ngDoCheck(): void {
    //   console.log('%c родительский ngDocheck', 'color: pink');
    // }
    // ngAfterContentInit(): void {
    //   console.log('%c родительский ngArfetContentInit', 'color: lightgreen');
    // }
    // ngAfterContentChecked(): void {
    //   console.log('%c родительский ngArfetContentChecked', 'color: green');
    // }
    // ngAfterViewInit(): void {
    //   console.log('%c родительский ngArfetViewInit', 'color: yellow');
    //   setTimeout(() => console.log('title внутри  setTimeout'));
    // }
    // ngAfterViewChecked(): void {
    //   console.log('%c родительский ngArfetViewChecked', 'color: orange');
    // }
    // ngOnDestroy(): void {
    //   console.log('%c ngOnDestroy', 'color: red');
  }
}
