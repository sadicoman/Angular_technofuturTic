import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss'],
})
export class Exercice1Component implements OnInit {
  myNumber!: number;

  ngOnInit(): void {
    this.myNumber = 0;
  }
  addOne(): void {
    this.myNumber += 1;
  }
  withdrawOne(): void {
    this.myNumber -= 1;
  }
}
