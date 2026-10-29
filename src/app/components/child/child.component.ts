import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  Input,
} from "@angular/core";

@Component({
  selector: "app-child",
  standalone: true,
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  // @Input() name!: string;

  constructor(@Attribute("name") public name: string) {}
}
