import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isSelected : boolean = true;
  backColor;

  @Output() change = new EventEmitter;

  onCLick(){
    this.isSelected = !this.isSelected;
    if(this.isSelected){
      this.backColor = "yellow";
    }
    else{
      this.backColor= "red";
    }
    this.change.emit();
  }

 
}
