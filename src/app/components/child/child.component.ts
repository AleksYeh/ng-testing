import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from "@angular/core";
import { GreenComponent } from "../green/green.component";

@Component({
  selector: "app-child",
  standalone: true,
  imports: [GreenComponent],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() number!: number;
  constructor(private crd: ChangeDetectorRef) {
    this.crd.detach();
  }
  ngDoCheck(): void {
    console.log("ngDoCheck app-child");
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.number = 100;
      // this.crd.markForCheck();
      this.crd.detectChanges();
    }, 5000);
    // this.number = 100;
    // this.crd.detectChanges();
  }
}
