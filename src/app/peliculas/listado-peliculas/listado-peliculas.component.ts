import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {
  
  title = 'angular-peliculas';

  @Input({ required: true })
  peliculas!: any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date('2010-05-30'),
      precio: 3.99  
    })
  };

  removerPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice, 1);
  }

}
