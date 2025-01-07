import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { IonList, IonItem, IonLabel, IonButton } from '@ionic/angular';
import { Cita } from '../citas/cita';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonLabel, IonButton],
})
export class AleatorioComponent implements OnInit {
  cita: Cita | null = null;

  @Output() onChange = new EventEmitter<Cita>();

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.mostrarNuevaCita();
  }

  mostrarNuevaCita(): void {
    this.cita = this.citasService.getCitaAleatoria();
    if (this.cita) {
      this.onChange.emit(this.cita);
    }
  }
}
