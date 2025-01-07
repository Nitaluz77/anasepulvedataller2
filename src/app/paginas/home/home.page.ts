import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AleatorioComponent } from 'src/app/aleatorio/aleatorio.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AleatorioComponent],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild(AleatorioComponent) aleatorioComponent!: AleatorioComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  
  }

  mostrarOtraCita(): void {
    if (this.aleatorioComponent) {
      this.aleatorioComponent.mostrarNuevaCita();
    }
  }
}

