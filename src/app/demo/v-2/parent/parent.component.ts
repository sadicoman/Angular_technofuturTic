import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/shared/Models/utilisateur';
import { datas } from 'src/app/shared/data/datas';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  listPerson: Utilisateur[] = datas;

  // permet de supprimer un élément d'un tableau
  deleteChildById(idPerson: number) {
    let indexToDelete = this.listPerson.findIndex(
      (person) => person.id == idPerson
    );
    this.listPerson.splice(indexToDelete, 1);
  }

  // permet la maise a jour d"un élément d'une liste par son prénom
  updateChildPrenom(updatedPerson: Utilisateur): void {
    let indexToUpdate = this.listPerson.findIndex(
      (person) => person.id == updatedPerson.id
    );
    this.listPerson[indexToUpdate].prenom = updatedPerson.prenom;
  }

  ngOnInit(): void {}
}
