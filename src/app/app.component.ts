import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [{
        titulo: 'Inside Out 2',
        fechaLanzamiento: new Date(),
        precio: 9.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
      },
      {
        titulo: 'Moana 2',
        fechaLanzamiento: new Date('2020-10-24'),
        precio: 5.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      },
      {
        titulo: 'Bad Boys: Ride or Die',
        fechaLanzamiento: new Date('2018-12-18'),
        precio: 4.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      },
      {
        titulo: 'Deadpool & Wolverine',
        fechaLanzamiento: new Date('2021-01-09'),
        precio: 9.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
      },
      {
        titulo: 'Oppenheimer',
        fechaLanzamiento: new Date('2018-04-18'),
        precio: 4.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
      },
      {
        titulo: 'The Flash',
        fechaLanzamiento: new Date('2023-07-15'),
        precio: 5.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
      }];
      
      this.peliculasProximosEstrenos = [
      {
        titulo: 'Moana 2',
        fechaLanzamiento: new Date('2020-10-24'),
        precio: 5.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
      },
      {
        titulo: 'The Flash',
        fechaLanzamiento: new Date('2023-07-15'),
        precio: 5.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
      },
      {
        titulo: 'Bad Boys: Ride or Die',
        fechaLanzamiento: new Date('2018-12-18'),
        precio: 4.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
      }];
    }, 2000)
  }
  
  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
  
}
