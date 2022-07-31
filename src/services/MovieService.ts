import axios from 'axios';
import { API_KEY, BASE_API_URI } from '../constants';
import { MovieServiceBase } from './abstract/MovieServiceBase';
import IMovie from '../Types/Movie.type';
import Movies from '../MovieDatabase.json';

export type MovieResponse = {
  Movies: IMovie[];
};

export class MovieService implements MovieServiceBase {
  // constructor() {
  //   let http = axios.create({
  //     baseURL: BASE_API_URI,
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  // }
  async getTop250Movies(): Promise<MovieResponse> {
    const requestURL = `${BASE_API_URI}/Top250Movies/${API_KEY}`;
    const response = await axios.get<MovieResponse>(requestURL);
    // debugger;
    if (response.data.Movies === undefined) {
      console.log(Movies);
    }
    return response.data;
  }
}
