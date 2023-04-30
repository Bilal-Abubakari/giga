import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input()
  label: string = ""
  @Input()
  options: string[] = []
  @Input()
  required: boolean = true
  @Input()
  selectLabel: string = "";
  @Input()
  id: string = "";
  @Input()
  control = new FormControl()

  errorMessages: Record<string, string> = {
    required: "This field is required.",
  }
}
