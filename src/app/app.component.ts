import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { ChildComponent } from "./components/child/child.component";
import { DataService } from "./services/data.service";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ChildComponent, AsyncPipe],
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  users$: Observable<any>;

  constructor(private dataService: DataService) {
    this.users$ = this.dataService.getUsers();
  }
}
