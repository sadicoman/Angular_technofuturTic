import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child_Exo3',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildExo3Component {
  @Input() usernamePlaceholder = 'Nom d\'utilisateur';
  @Input() commentPlaceholder = 'Commentaire';
  @Input() submitText = 'Envoyer';
  @Output() commentSubmitted = new EventEmitter<{ username: string; comment: string }>();

  username = '';
  comment = '';

  submit() {
    this.commentSubmitted.emit({ username: this.username, comment: this.comment });
  }
}
