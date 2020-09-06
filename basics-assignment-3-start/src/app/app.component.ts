import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphDisplay = true;
  
  numberArray = [];

  onButtonClick(){
    this.numberArray.push(this.numberArray.length+1);
    this.paragraphDisplay = !this.paragraphDisplay;
  }

}
