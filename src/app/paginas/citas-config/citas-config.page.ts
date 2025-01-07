import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-citas-config',
  templateUrl: './citas-config.page.html',
  styleUrls: ['./citas-config.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CitaComponent implements OnInit {
  cita: Cita;

  constructor(private citasService: CitasService) { }

  ngOnInit(): void {
    this.mostrarNuevaCita();
  }

  mostrarNuevaCita(): void {
    this.cita = this.citasService.getCitaAleatoria();
  }
}
