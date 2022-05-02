import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Review } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieReviewService {

  review : Review | undefined;

  constructor() { }

  saveToStorage(movieId: string) {
    localStorage.setItem(movieId, JSON.stringify(this.review));
  }

  deleteFromStorage(movieId: string) {
    localStorage.removeItem(movieId);
  }

  getFromStorage(movieId: string): any {
    return localStorage.getItem(movieId);
  }
}
