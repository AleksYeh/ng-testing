import { Component } from '@angular/core';
import { RedComponent } from '../red/red.component';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrl: './green.component.scss',
  standalone: true,
  imports: [RedComponent],
})
export class GreenComponent {}
