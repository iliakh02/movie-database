import { ParamKeyValuePair } from 'react-router-dom';

export default interface IMovie {
  id: string;
  rank: number;
  title: string;
  fullTitle: string;
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
  imDbId: string;
  title: string;
  fullTitle: string;
  type: string;
  year: number;
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  thumbnailUrl: string;
  uploadDate: null;
  link: string;
  linkEmbed: string;
  errorMessage: string;
}

export interface IMovieDetails {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: number;
  image: string;
  releaseDate: Date;
  runtimeMins: number;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  awards: string;
  directors: string;
  directorList: IPerson[];
  writers: string;
  writerList: IPerson[];
  stars: string;
  starList: IPerson[];
  actorList: IActor[];
  fullCast: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: number;
    directors: IWorkingTeam;
    writers: IWorkingTeam;
    actors: IActor[];
    others: IEmployer[];
    errorMessage: string;
  };
  genres: string;
  genreList: KeyValuePair[];
  companies: string;
  companyList: ICompany[];
  countries: string;
  countryList: KeyValuePair[];
  languages: string;
  languageList: KeyValuePair[];
  contentRating: string;
  imDbRating: number;
  imDbRatingVotes: number;
  metacriticRating: number;
  ratings: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: number;
    imDb: number;
    metacritic: number;
    theMovieDb: number;
    rottenTomatoes: number;
    filmAffinity: number;
    errorMessage: string;
  };
  wikipedia: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: number;
    language: string;
    titleInLanguage: string;
    url: string;
    plotShort: IPlot;
    plotFull: IPlot;
    errorMessage: string;
  };
  posters: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: number;
    posters: IImage[];
    backdrops: IImage[];
    errorMessage: string;
  };
  images: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
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
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
  };
  tagline: null;
  keywords: string;
  keywordList: string[];
  similars: IMovie[];
  tvSeriesInfo: null;
  tvEpisodeInfo: null;
  errorMessage: null;
}
