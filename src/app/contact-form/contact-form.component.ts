import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  optionsPop = [
    { id: 1, name: 'Claire' },
    { id: 2 , name: 'Abhishek'},
    { id: 3 , name: 'Claire loves Abhihek'}
  ];

  radioPop = [
    { id: 1, name: 'Email' },
    { id: 2 , name: 'Phone-No'},
    { id: 3 , name: 'Claire loves Abhihek'}
  ];

  onChange(x){
    console.log(x);
  }

  onSubmit(f){
    console.log(f.value.email);
  }


  // optionPopulate(){

  // }
}
