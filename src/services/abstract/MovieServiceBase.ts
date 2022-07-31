import IMovie from '../../Types/Movie.type';
import { MovieResponse } from '../MovieService';

export interface MovieServiceBase {
  getTop250Movies(): Promise<MovieResponse>;
}
