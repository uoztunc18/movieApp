import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movies.service';
import { Movie } from "../models/movie";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  categories: Category[] = [];
  model : any = {}

  constructor(private categoryService : CategoryService,
              private movieService : MovieService,
              private router : Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  createMovie(): void {
    const movie = {
      id: 0,
      title: this.model.title,
      description: this.model.description,
      imgUrl: this.model.imgUrl,
      popular: false,
      categoryId: this.model.categoryId
    }

    this.movieService.createMovie(movie).subscribe(data =>
      this.router.navigate(["/movies", data.id]))
  }

}
