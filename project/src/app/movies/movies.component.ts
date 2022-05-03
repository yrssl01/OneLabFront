import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, iif, map, switchMap, takeUntil } from 'rxjs';
import { Movie, PopularMovies } from '../shared/interfaces/movies.interface';
import { ApiService } from '../shared/services/api.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent extends BaseComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({
    query: new FormControl(''),
  })
  movies: Movie[] = [];
  posterPath: string = 'https://image.tmdb.org/t/p/original/';
  constructor(private apiService: ApiService) {
    super();
   }

  ngOnInit(): void {
    this.apiService.getMovies()
    .pipe(
      takeUntil(this.destroyed)
      )
    .subscribe((res: PopularMovies) => {
      if (res && res.results) {
        this.movies = res.results;
      }
    });

    this.searchForm.get('query')?.valueChanges
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroyed),
      switchMap(query => iif(() => this.isEmpty(query), this.apiService.searchMovies({query: query}), this.apiService.getMovies() )),
      map(res => res?.results || [])
    )
    .subscribe(result  => {
      this.movies = result;
    })
  }

  isEmpty(query:string):boolean {
    if (query) 
      return true;
    return false;  
  }

}

