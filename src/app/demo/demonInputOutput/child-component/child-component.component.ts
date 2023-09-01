import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponentComponent {
  // @Input() pour recevoir des données du composant parent
  @Input() messageFromParent: string = '';

  // @Output() pour émettre des données vers le composant parent
  @Output() messageToParent = new EventEmitter<string>();

  // Méthode pour émettre un message vers le composant parent
  sendMessageToParent() {
    this.messageToParent.emit('Message du composant enfant vers le parent.');
  }
}
