import axios, { AxiosResponse } from 'axios';
import { API_KEY, BASE_API_URI } from '../constants';
import { MovieServiceBase } from './abstract/MovieServiceBase';
import IMovie from '../Types/Movie.type';
import movies from '../MovieDatabase.json';

export interface MovieListResponse {
  data: IMovie[];
}

export class MovieService implements MovieServiceBase {
  async getTop250Movies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/Top250Movies/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    console.log(response);
    return response;
  }

  async getMostPopularMovies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/MostPopularMovies/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    console.log(response);
    return response;
  }

  async getComingSoonMovies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/ComingSoon/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    console.log(response);
    return response;
  }

  async getMoviesBySearchQuery(searchString: string): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/SearchMovie/${API_KEY}/${searchString}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.results;
    console.log(response);
    return response;
  }
}
