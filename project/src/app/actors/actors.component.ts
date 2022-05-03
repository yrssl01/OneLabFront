import { Component, OnInit } from '@angular/core';
import { Actor, ResultsActor } from '../shared/interfaces/movies.interface';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[] = [];
  profilePath:string = 'https://image.tmdb.org/t/p/original/';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getActors().subscribe((res: ResultsActor) => {
      if (res && res.results)
        this.actors = res.results;
    })
  }

}
