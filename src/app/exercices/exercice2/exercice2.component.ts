import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss'],
})
export class Exercice2Component {
  timer: any = undefined;
  elapsedTime: number = 0;
  isActive: boolean = false;

  start(): void {
    this.timer = setInterval(() => {
      this.elapsedTime++;
      // console.log('Temps écoulé :', this.elapsedTime, 'secondes');
    }, 1000);
  }

  pause(): void {
    clearInterval(this.timer);
    this.timer = undefined;
    // console.log('Chronomètre en pause');
  }

  reset(): void {
    this.elapsedTime = 0;
    this.pause();
    // console.log('Chronomètre réinitialisé');
  }

  formatTime(): string {
    const minutes: number = Math.floor(this.elapsedTime / 60);
    const seconds: number = this.elapsedTime % 60;
    return `${minutes} minutes ${seconds} secondes`;
  }
  toggle(): void {
    if (!this.isActive) {
      this.start();
    } else {
      this.pause();
    }
    this.isActive = !this.isActive;
  }
}
