import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() obj!: any;

  text: string = 'Какой-то текст';

  constructor() {
    //   console.log(
    //     '%c Компонент app-child успешно создан!',
    //     'background: darkgreen'
    //   );
    console.log(
      '%c Компонент app-child успешно создан!',
      'background: darkgreen'
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c ngOnchanges', 'color: aqua');
    // console.log('changes', changes);
  }
  ngOnInit(): void {
    console.log('%c ngOninit', 'color: deepskyblue');
  }

  ngDoCheck(): void {
    console.log('%c ngDocheck', 'color: pink');
  }

  ngAfterContentInit(): void {
    console.log('%c ngArfetContentInit', 'color: lightgreen');
  }
  ngAfterContentChecked(): void {
    console.log('%c ngArfetContentChecked', 'color: green');
  }
  ngAfterViewInit(): void {
    console.log('%c ngArfetViewInit', 'color: yellow');
    // this.title = '123';
    setTimeout(() => (this.title = '123'));
  }
  ngAfterViewChecked(): void {
    console.log('%c ngArfetViewChecked', 'color: orange');
  }
  ngOnDestroy(): void {
    console.log('%c ngOnDestroy', 'color: red');
  }

  // ngOnChanges(): void {
  //   console.log('%c ngOnchanges', 'color: aqua; background: black');
  // }
  // ngOnInit(): void {
  //   console.log(
  //     '%c дочерний ngOninit',
  //     'color: deepskyblue; background: black'
  //   );
  // }

  // ngDoCheck(): void {
  //   console.log('%c дочерний ngDocheck', 'color: pink; background: black');
  // }

  // ngAfterContentInit(): void {
  //   console.log(
  //     '%c дочерний ngArfetContentInit',
  //     'color: lightgreen; background: black'
  //   );
  // }
  // ngAfterContentChecked(): void {
  //   console.log(
  //     '%c дочерний ngArfetContentChecked',
  //     'color: green; background: black'
  //   );
  // }

  // ngAfterViewChecked(): void {
  //   console.log(
  //     '%c дочерний ngArfetViewChecked',
  //     'color: orange; background: black'
  //   );
  // }
}
