import axios from 'axios';
import { API_KEY, BASE_API_URI } from '../constants';
import { MovieServiceBase } from './abstract/MovieServiceBase';
import IMovie from '../Types/Movie.type';
import movies from '../MovieDatabase.json';

export type MovieResponse = {
  Movies: IMovie[];
};

export class MovieService implements MovieServiceBase {
  async getTop250Movies(): Promise<MovieResponse> {
    const requestURL = `${BASE_API_URI}/Top250Movies/${API_KEY}`;
    const response = await axios.get<MovieResponse>(requestURL);

    if (response.data.Movies === undefined) {
      console.log(movies);
      response.data.Movies = JSON.parse(JSON.stringify(movies.items));
    }
    return response.data;
  }
}
