import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credits, Movie, UpcomingMovies, PopularMovies, ResultsActor } from '../interfaces/movies.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '865314ec08746bfeadf25d86efdafb42';
  favorites:Movie[] = [];

  constructor(private httpClient: HttpClient) { }

  getCredits(id: number): Observable<Credits> {
    return this.httpClient.get<Credits>(`${this.apiUrl}movie/`+id+`/credits?api_key=${this.apiKey}&language=ru-RU`)
  }

  getActors(): Observable<ResultsActor> {
    return this.httpClient.get<ResultsActor>(`${this.apiUrl}person/popular?api_key=${this.apiKey}&language=ru-RU`);
  }

  getMovies(params = {}): Observable<PopularMovies> {
    return this.httpClient.get<PopularMovies>(`${this.apiUrl}movie/popular?api_key=${this.apiKey}&language=ru-RU`,
    params);
  }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}movie/`+id+`?api_key=${this.apiKey}&language=ru-RU`);
  }

  getUpcomingMovies(): Observable<UpcomingMovies> {
    return this.httpClient.get<UpcomingMovies>(`${this.apiUrl}movie/upcoming?api_key=${this.apiKey}&language=ru-RU`);
  }

  searchMovies(params = {}): Observable<PopularMovies> {
    return this.httpClient.get<PopularMovies>(`${this.apiUrl}search/movie?api_key=${this.apiKey}&language=ru-RU`,
    { params })
  }

  getFavorites(): Movie[] {
    let dataFromStorage = localStorage.getItem('favorites');
    this.favorites = JSON.parse(dataFromStorage || '{}');
    return this.favorites;
  }

  addToFavorite(movie: Movie) {
    let array:Movie[] = this.getFavorites() || [];
    if (!array.includes(movie)) {
      array.push(movie);
      localStorage.setItem('favorites',JSON.stringify(array));
    }
    else 
      alert('Movie is already in favorite');
  }

  deleteFromFavorites(movie: Movie) {
    let array:Movie[] = this.getFavorites() || [];
    array = array.filter((item) => item.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(array));
  }

}
