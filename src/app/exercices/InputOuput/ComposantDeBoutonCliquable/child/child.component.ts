import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child_exo1',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildExo1Component {
  @Input() buttonText = 'Cliquez-moi';
  @Output() buttonClicked = new EventEmitter<void>();

  handleClick() {
    this.buttonClicked.emit();
  }
}
