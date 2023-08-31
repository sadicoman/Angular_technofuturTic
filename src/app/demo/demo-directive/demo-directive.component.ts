import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss'],
})
export class DemoDirectiveComponent {
  taches = [
    {
      id: 0,
      nom: 'Tache 1',
      complet: false,
    },
    {
      id: 1,
      nom: 'Tache 2',
      complet: true,
    },
    {
      id: 2,
      nom: 'Tache 3',
      complet: false,
    },
    {
      id: 3,
      nom: 'Tache 4',
      complet: true,
    },
  ];

}
