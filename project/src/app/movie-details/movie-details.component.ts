import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Cast, Credits, Movie, Review } from '../shared/interfaces/movies.interface';
import { ApiService } from '../shared/services/api.service';
import { MovieReviewService } from '../shared/services/movie-review.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  reviewForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    text: new FormControl('',Validators.required),
  });

  review: Review | undefined;
  movie: Movie | undefined;
  cast: Cast[] | undefined;
  isFavorite: string = 'no';
  originalPath: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private movieReviewService: MovieReviewService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));
    this.apiService.getMovie(movieIdFromRoute).subscribe((res: Movie) => {
      this.movie = res;
      if (this.apiService.getFavorites().filter(m => m.id === this.movie?.id).length > 0){
        console.log('true');
        this.isFavorite = 'yes';
      }
      this.display('movie_'+this.movie.id);
      this.apiService.getCredits(this.movie.id)
      .subscribe((x: Credits) => {
        this.cast = x.cast.slice(0, 9);
      });
    });


    
  }

  reviewFormCtrl(form: FormGroup, ctrlName: string): any {
    return form.get(ctrlName)?.errors;
  }

  display(movieId: string) {
    this.review = JSON.parse(this.movieReviewService.getFromStorage(movieId));
  }

  submit(movieId : number) {
    this.review = this.reviewForm.value;
    this.movieReviewService.review = this.review;
    this.movieReviewService.saveToStorage('movie_'+movieId);
  }

  deleteReview(movieId : number) {
    this.movieReviewService.deleteFromStorage('movie_'+movieId);
  }

  addToFavorite(movie: Movie) {
    this.apiService.addToFavorite(movie);
  } 

  deleteFromFavorite(movie: Movie) {
    this.apiService.deleteFromFavorites(movie);
  }

}
