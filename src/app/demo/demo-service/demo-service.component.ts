import { Component } from '@angular/core';
import { DemoBookService } from 'src/app/shared/services/demo-book.service';

@Component({
    selector: 'app-demo-service',
    templateUrl: './demo-service.component.html',
    styleUrls: ['./demo-service.component.scss'],
})
export class DemoServiceComponent {
    public books: string[] = [];

    newBook: string = '';

    constructor(private _bookService : DemoBookService){}

    ngOnInit(){
      // a l'instantiation du composant
      this.books = this._bookService.getBook();
    }

    //ajout de livre
    addNewBook() : void{
      // utilisation du service pour ajouter un livre
      this._bookService.addBook(this.newBook);
    }

    //delete
    removeBook(index : number) : void{
      this._bookService.removeBook(index);
    }
}
