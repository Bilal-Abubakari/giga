import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input()
  label: string = ""
  @Input()
  type: string = ""
  @Input()
  placeholder: string = ""
  @Input()
  required: boolean = true
  @Input()
  info: string = ""
  @Input()
  control = new FormControl()
  @Input()
  capitalize: boolean = false

  errorMessages: Record<string, string> = {
    required: "This field is required.",
    pattern: "You input is invalid.",
    email: "Provide a valid email"
  }
}
