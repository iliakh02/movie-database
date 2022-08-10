import IMovie, { IMovieDetails } from '../../Types/Movie.type';

export interface MovieServiceBase {
  getTop250Movies(): Promise<IMovie[]>;
  getMostPopularMovies(): Promise<IMovie[]>;
  getComingSoonMovies(): Promise<IMovie[]>;
  getMoviesBySearchQuery(searchString: string): Promise<IMovie[]>;
  getTilteInfo(id: string): Promise<IMovieDetails>;
}
