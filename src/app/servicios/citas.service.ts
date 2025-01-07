import { Injectable } from '@angular/core';
import { Cita } from '../citas/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private mencion: string[] = [
    'No hay hombre tan cobarde a quien el amor no haga valiente y transforme en héroe.',
    'Hay alguien tan inteligente que aprende de la experiencia de los demás.',
    'La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.',
    'Felicidad no es hacer lo que uno quiere sino querer lo que uno hace.'
  ];  

  private autores: string[] = [
    'Platon',
    'Voltaire',
    'Berbard Shaw',
    'Jean Paul Sartre'
  ];

  private citas: Cita[] = [];

  constructor() {
    this.inicializarCitas();
  }

  getCitas(): Cita[] { 
    return [...this.citas]; 
  } getCitaAleatoria(): Cita { 
    const indice = Math.floor(Math.random() * this.citas.length); 
    return this.citas[indice]; 
  } 
  agregarCita(frase: string, autor: string): void { 
    this.citas.push(new Cita(frase, autor)); } 
    eliminarCita(cita: Cita): void { this.citas = this.citas.filter(c => c !== cita); 

  } 
}