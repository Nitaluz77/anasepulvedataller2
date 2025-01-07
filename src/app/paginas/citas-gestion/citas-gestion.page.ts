import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-citas-gestion',
  templateUrl: './citas-gestion.page.html',
  styleUrls: ['./citas-gestion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CitasGestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
