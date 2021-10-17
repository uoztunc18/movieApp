import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";

@Injectable()

export class MovieService {

    url = "http://localhost:3000/movies";

    constructor(private http : HttpClient) {}

    getMovies(categoryId : number) : Observable<Movie[]> {
        let newUrl = this.url;

        if (categoryId) {
            newUrl += '?categoryId=' + categoryId;
        }

        return this.http.get<Movie[]>(newUrl);
    }

    getMovieById(movieId : number) : Observable<Movie> {
        let newUrl = this.url;

        if (movieId) {
            newUrl += '/' + movieId;
        }

        return this.http.get<Movie>(newUrl);
    }

    createMovie(movie: Movie) : Observable<Movie> {
        return this.http.post<Movie>(this.url, movie);
    }
}