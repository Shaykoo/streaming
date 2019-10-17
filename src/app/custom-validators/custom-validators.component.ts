import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'custom-validators',
  templateUrl: './custom-validators.component.html',
  styleUrls: ['./custom-validators.component.css']
})
export class CustomValidatorsComponent {

  form = new FormGroup({ 
    accounts: new FormGroup({                 // subgroup
      'username': new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      [
        UsernameValidators.shouldBeUnique    // for async operations
      ]),
      'password' : new FormControl('', Validators.required)
    })
    
  });

  // it's a property but looks like a function/method
  get username(){
    return this.form.get('account.username');
  }

  get password(){
    return this.form.get('account.password');
  }

}
