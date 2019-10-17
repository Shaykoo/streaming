import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

    form = new FormGroup({
      topics: new FormArray([])
    });

    get topics() {
      return this.form.get('topics') as FormArray;
    }

    addTopic(topic:HTMLInputElement){
      this.topics.push(new FormControl(topic.value)); //FormControl coz we are pushing input value here
      topic.value="";
      };

    onRemove(topic: FormControl){
      let index = this.topics.controls.indexOf(topic);  // controls is the control object of FormCOntrol class
      this.topics.removeAt(index);
    }

  }


