import { Movie } from "./movie";

export class MovieRepo {

    private movies: Movie[] = [
    ];

    constructor() { };

    getMovies(): Movie[] {
        return this.movies;

    }

    getPopMovies(): Movie[] {
        return this.movies.filter(i => i.popular == true);
    }

    getMovieById(id: number): Movie {
        return this.movies.find(i => i.id == id);
    }
}