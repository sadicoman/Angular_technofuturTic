import { Component } from '@angular/core';

@Component({
  selector: 'app-parent_Exo3',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentExo3Component {
  onCommentSubmitted(data: { username: string; comment: string }) {
    console.log('Commentaire reçu :', data);
  }
}
