import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  monNom: string = 'Steve';
  monAge: number = 40;
  maDateNaissance: Date = new Date(2000, 1, 1);
  marier: boolean = false;
  monTableau: string[] = ['Toto', 'Tata', 'Tutu']; //any[] si four tout aha

  changeNom() {
    this.monNom = 'François';
  }
}
