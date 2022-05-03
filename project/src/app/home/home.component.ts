import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/interfaces/movies.interface';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favorites: Movie[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.favorites = this.apiService.getFavorites();
  }

}
