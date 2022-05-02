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
    name: new FormControl(),
    text: new FormControl(),
  });

  review: Review | undefined;
  movie: Movie | undefined;
  cast: Cast[] | undefined;
  originalPath: string = 'https://image.tmdb.org/t/p/original/';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private movieReviewService: MovieReviewService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('movieId'));
    this.apiService.getMovie(movieIdFromRoute).subscribe((res: Movie) => {
      this.movie = res;
      this.display('movie_'+this.movie.id);
      this.apiService.getCredits(this.movie.id)
      .subscribe((x: Credits) => {
        this.cast = x.cast.slice(0, 9);
      });
    });
    
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

}
