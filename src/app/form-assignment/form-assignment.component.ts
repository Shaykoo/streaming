import { Component } from '@angular/core';

@Component({
  selector: 'form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {

  optionsPop = [
    { id: 1 , course:"Development" },
    { id: 2 , course:"Art" },
    { id: 3 , course:"Languages" }
  ];

}
