import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss',
  standalone: true,
  // imports: [RedComponent],
  encapsulation: ViewEncapsulation.None,
})
export class GreenComponent {}
