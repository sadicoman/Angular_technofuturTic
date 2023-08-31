import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  articles = [
    {
      titre: 'Article 1',
      description: 'Description 1',
      estPublie: true,
    },
    {
      titre: 'Article 2',
      description: 'Description 2',
      estPublie: false,
    },
    {
      titre: 'Article 3',
      description: 'Description 3',
      estPublie: true,
    },
  ];
  afficherTout: boolean = true;
  recherche: string = '';
}
