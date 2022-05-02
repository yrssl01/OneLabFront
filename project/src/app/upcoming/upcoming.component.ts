import { Component, OnInit } from '@angular/core';
import { Movie, UpcomingMovies } from '../shared/interfaces/movies.interface';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  movies: Movie[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/original/';
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUpcomingMovies().subscribe((res: UpcomingMovies) => {
      if (res && res.results) {
        this.movies = res.results;
        console.log(this.movies);
      }
    });
  }


  

}
