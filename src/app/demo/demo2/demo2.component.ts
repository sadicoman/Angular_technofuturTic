import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss'],
})
export class Demo2Component {
  myString: string = 'hello world';
  myNumber: number = 42.222222222222;
  myDate: Date = new Date();
  myTempC: number = 16;
  myTempF: number = 42;
}
