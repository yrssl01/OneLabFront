import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MovieReviewService } from './shared/services/movie-review.service';
import { ApiService } from './shared/services/api.service';
import { ActorsComponent } from './actors/actors.component';
import { ErrorDirective } from './shared/directives/error.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    UpcomingComponent,
    NotFoundComponent,
    ActorsComponent,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomeComponent
      },
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'movies/:movieId',
        component: MovieDetailsComponent
      },
      {
        path: 'upcoming',
        component: UpcomingComponent
      },
      {
        path: 'actors',
        component: ActorsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    MovieReviewService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
