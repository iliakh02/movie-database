export default interface IMovie {
  id: string;
  rank: number;
  title: string;
  year: number;
  image: string;
  crew: string;
  imDbRating: number;
  imDbRatingCount: number;
}

export interface IPerson {
  id: string;
  name: string;
}
export interface IActor {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface ICompany {
  id: string;
  name: string;
}

export interface KeyValuePair {
  key: string;
  value: string;
}

export interface IEmployer {
  id: string;
  name: string;
  description: string;
}

export interface IWorkingTeam {
  job: string;
  items: IEmployer[];
}

export interface IPlot {
  plainText: string;
  html: string;
}

export interface IImage {
  id: string;
  link: string;
  aspectRatio: number;
  language: string;
  width: number;
  height: number;
}

export interface ITrailer {
  link: string;
  linkEmbed: string;
  errorMessage: string;
}

export interface IMovieDetails {
  id: string;
  title: string;
  originalTitle: string;
  type: string;
  year: number;
  image: string;
  releaseDate: Date;
  runtimeStr: string;
  plot: string;
  directors: string;
  writers: string;
  stars: string;
  actorList: IActor[];
  genres: string;
  genreList: KeyValuePair[];
  companies: string;
  companyList: ICompany[];
  contentRating: string;
  imDbRating: number;
  imDbRatingVotes: number;
  posters: {
    posters: IImage[];
    errorMessage: string;
  };
  images: {
    items: [
      {
        title: string;
        image: string;
      }
    ];
    errorMessage: string;
  };
  trailer: ITrailer;
  boxOffice: {
    budget: string;
  };
}
