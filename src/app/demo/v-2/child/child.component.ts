import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Utilisateur } from 'src/app/shared/Models/utilisateur';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() id: number = 0;
  @Input() prenom: string = '';

  @Output() clickOnChildDelete: EventEmitter<number> =
    new EventEmitter<number>();

  @Output() clickOnChildUpdatePrenom: EventEmitter<Utilisateur> =
    new EventEmitter<Utilisateur>();

  trigerInputName: boolean = false;

  newPrenom: string = '';
  newUser: Utilisateur = {
    id: 0,
    prenom: '',
  };

  // Delete
  deleteMe(id_person: number): void {
    this.clickOnChildDelete.emit(id_person);
  }

  // Update
  saveOnParent(id_person: number): void {
    this.newUser.id = id_person;
    this.newUser.prenom = this.newPrenom;
    this.clickOnChildUpdatePrenom.emit(this.newUser);
  }

  //Show input
  showInput(prenom: string): void {
    this.newPrenom = prenom;
    this.trigerInputName = !this.trigerInputName;
  }
}
