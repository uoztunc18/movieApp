import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieRepo } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movies.service';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  //moviesRepo: MovieRepo;
  popularMovies: Movie[];

  showPop: boolean = false;
  filterText: string = "";

  constructor(private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute) {
    //this.moviesRepo = new MovieRepo();
    //this.movies = this.moviesRepo.getMovies();
    //this.popularMovies = this.moviesRepo.getPopMovies();
    //this.filteredMovies = this.movies;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieService.getMovies(params["categoryId"]).subscribe(
        data => {
          this.movies = data;
          this.filteredMovies = this.movies;
          this.popularMovies = this.movies.filter(i => i.popular == true);
        }
      );
    });
  }

  addToList($event: any, item: Movie) {
    if ($event.target.classList.contains("btn-primary")) {
      $event.target.innerText = "Remove from the list"
      $event.target.classList.remove("btn-primary");
      $event.target.classList.add("btn-danger");

      this.alertify.success(item.title + " added");
    } else {
      $event.target.innerText = "Add to the list"
      $event.target.classList.remove("btn-danger");
      $event.target.classList.add("btn-primary");

      this.alertify.error(item.title + " removed");
    }
  }

  filterChange(): void {
    this.filteredMovies = this.filterText ?
      this.movies.filter(data => data.description.toLowerCase().includes(this.filterText)
        || data.title.toLowerCase().includes(this.filterText)) : this.movies;
  }
}