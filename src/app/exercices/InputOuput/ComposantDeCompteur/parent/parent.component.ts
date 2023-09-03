import { Component } from '@angular/core';

@Component({
  selector: 'app-parent_exo2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentExo2Component {
  initialCounter = 0;

  onCounterValueChanged(value: number) {
    console.log('Valeur du compteur :', value);
  }
}
