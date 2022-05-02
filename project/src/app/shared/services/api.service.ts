import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credits, Movie, UpcomingMovies, PopularMovies } from '../interfaces/movies.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://api.themoviedb.org/3/';
  apiKey = '865314ec08746bfeadf25d86efdafb42';

  constructor(private httpClient: HttpClient) { }

  getCredits(id: number): Observable<Credits> {
    return this.httpClient.get<Credits>(`${this.apiUrl}movie/`+id+`/credits?api_key=${this.apiKey}&language=ru-RU`)
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

}
