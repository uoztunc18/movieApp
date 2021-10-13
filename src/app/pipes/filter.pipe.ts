import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: Movie[], filter: string): Movie[] {

    if (filter == "") {
      return movies;
    }

    filter = filter.toLowerCase();
    
    return movies.filter(data => data.description.toLowerCase().includes(filter) || data.title.toLowerCase().includes(filter));

  }

}