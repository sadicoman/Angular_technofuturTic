import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss'],
})
export class Demo1Component {
  valeur : number = 0;
  changePlus(){
    this.valeur++;
  }
  changeMoins(){
    this.valeur--;
  }
}
