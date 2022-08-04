import IMovie from '../../Types/Movie.type';
import { MovieListResponse } from '../MovieService';

export interface MovieServiceBase {
  getTop250Movies(): Promise<IMovie[]>;
  getMostPopularMovies(): Promise<IMovie[]>;
  getMoviesBySearchQuery(searchString: string): Promise<IMovie[]>;
}
