import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CitasService } from '../servicios/citas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class FormularioComponent implements OnInit {
  mencion: string = '';
  autor: string = '';

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {}

  agregarCita(): void {
    if (this.mencion.trim().length >= 5 && this.autor.trim().length >= 2) {
      this.citasService.agregarCita(this.mencion, this.autor);
      this.mencion = ''; 
      this.autor = '';
    } else {
      alert('Por favor, asegúrate de que los campos sean válidos.');
    }
  }
}
