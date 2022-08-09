import axios, { AxiosResponse } from 'axios';
import { API_KEY, BASE_API_URI } from '../constants';
import { MovieServiceBase } from './abstract/MovieServiceBase';
import IMovie, { IMovieDetails } from '../Types/Movie.type';

export class MovieService implements MovieServiceBase {
  async getTop250Movies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/Top250Movies/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    return response;
  }

  async getMostPopularMovies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/MostPopularMovies/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    return response;
  }

  async getComingSoonMovies(): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/ComingSoon/${API_KEY}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.items;
    return response;
  }

  async getMoviesBySearchQuery(searchString: string): Promise<IMovie[]> {
    const requestURL = `${BASE_API_URI}/SearchMovie/${API_KEY}/${searchString}`;
    let response: IMovie[] = [];
    const { data } = await axios.get(requestURL);
    response = data.results;
    return response;
  }

  async getTilteInfo(id: string): Promise<IMovieDetails> {
    const requestURL = `${BASE_API_URI}/Title/${API_KEY}/${id}/FullActor,Posters,Images,Trailer`;
    let response: IMovieDetails = {} as IMovieDetails;
    const { data } = await axios.get(requestURL);
    response = data;
    return response;
  }
}
