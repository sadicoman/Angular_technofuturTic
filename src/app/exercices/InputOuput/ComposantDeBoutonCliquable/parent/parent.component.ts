import { Component } from '@angular/core';

@Component({
  selector: 'app-parent_exo1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentExo1Component {
  buttonLabel = 'Cliquez sur ce bouton';

  onButtonClicked() {
    console.log('Le bouton a été cliqué');
  }
}
