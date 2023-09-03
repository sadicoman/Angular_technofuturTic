import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildExo2Component {
  @Input() incrementText = 'Incrémenter';
  @Input() decrementText = 'Décrémenter';
  @Input() counter = 0;
  @Output() counterValue = new EventEmitter<number>();

  increment() {
    this.counter++;
    this.counterValue.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.counterValue.emit(this.counter);
  }
}
