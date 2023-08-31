import { Component } from '@angular/core';
import { Tache } from 'src/app/shared/Models/tache';

@Component({
  selector: 'app-demo-directive2',
  templateUrl: './demo-directive2.component.html',
  styleUrls: ['./demo-directive2.component.scss'],
})
export class DemoDirective2Component {
  // je créer plusieurs taches
  tache1: Tache = {
    id: 0,
    nom: 'Tache 1',
    complet: false,
  };

  tache2: Tache = {
    id: 1,
    nom: 'Tache 1',
    complet: false,
  };

  tache3: Tache = {
    id: 2,
    nom: 'Tache 2',
    complet: false,
  };

  tache4: Tache = {
    id: 3,
    nom: 'Tache 3',
    complet: false,
  };

  taches: Tache[] = [this.tache1, this.tache2, this.tache3, this.tache4];

  changerEtat(id: number): void {
    // Inversion de l'état booléen de complet
    this.taches[id].complet = !this.taches[id].complet;
  }
}
