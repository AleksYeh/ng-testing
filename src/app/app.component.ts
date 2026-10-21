import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  signal,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChildComponent } from "./components/child/child.component";
import { interval } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ChildComponent, AsyncPipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title: string = "Hello, world!";
  interval$ = interval(1000);
  signal = signal(0);

  constructor(private crd: ChangeDetectorRef) {
    // this.crd.detach();
  }

  ngDoCheck(): void {
    console.log("ngDoCheck app-root");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit app-root");

    setTimeout(() => {
      this.title = "Привет, мир!";
      // this.crd.detach();
    }, 3000);
    setTimeout(() => {
      this.title = "Привет, мир!";
      // this.crd.reattach();
    }, 6000);
  }

  handleClick() {
    console.log("handleClick");
  }
}
