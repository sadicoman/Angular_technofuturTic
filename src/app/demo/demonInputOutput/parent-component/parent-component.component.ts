import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ParentComponentComponent {
  // Message à passer au composant enfant
  message = 'Message du composant parent vers le composant enfant.';

  // Variable pour stocker le message renvoyé par le composant enfant
  receivedMessage: string = '';

  // Méthode pour gérer le message renvoyé par le composant enfant
  handleMessage(message: string) {
    this.receivedMessage = message;
  }
}
