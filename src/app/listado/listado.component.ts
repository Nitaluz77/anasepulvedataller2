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

export class ListadoComponent  implements OnInit {

  @Input() citas: Cita[] = []; 
  @Output() onEliminar = new EventEmitter<Cita>(); 

  eliminarCita(cita: Cita): void {
    this.onEliminar.emit(cita); 
  } 
}