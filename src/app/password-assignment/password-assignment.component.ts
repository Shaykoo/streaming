import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'password-assignment',
  templateUrl: './password-assignment.component.html',
  styleUrls: ['./password-assignment.component.css']
})
export class PasswordAssignmentComponent {

    
  form = new FormGroup({
    'username': new FormControl('', [    // this array represents error object
      Validators.required,
      Validators.minLength(3)
    ]),
    'password' : new FormControl('', Validators.required)
  });

  // it's a property but looks like a function/method
  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

}
