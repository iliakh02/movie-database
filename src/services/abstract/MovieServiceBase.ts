import IMovie from '../../Types/Movie.type';
import { MovieListResponse } from '../MovieService';

export interface MovieServiceBase {
  // getTop250Movies(): Promise<MovieListResponse>;
  getMostPopularMovies(): Promise<IMovie[]>;
}
