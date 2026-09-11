import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { BlueComponent } from 'src/app/shared/components/blue/blue.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, BlueComponent],
  exports: [FirstComponent],
})
export class FirstModule {}
