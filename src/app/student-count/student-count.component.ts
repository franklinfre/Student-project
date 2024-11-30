import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css'] 
})
export class StudentCountComponent {

  @Input()
  all: number = 0;

  @Input()
  male: number = 0;

  @Input()
  female: number = 0;

  selectedRadioButtonValue: string='All';

  
// The Output decorator makes the property of an Component as an Output property
  // The EventEmitter class in Angular is used to create the custom event
  // When the radio button selection changes, the selected radio button
  // value which is a string gets passed to the event handler method.
  // Hence, the event payload is string.

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChange()
  {
    console.log(this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }


}
