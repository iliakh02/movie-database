import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieService } from '../../services/MovieService';
import { IActor, IMovieDetails, KeyValuePair } from '../../Types/Movie.type';
import TitleJ from '../../shabolda.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleTop from './TitleTop/TitleTop';
import TitleMedia from './TitleMedia/TitleMedia';
import MovieDescription from './MovieDescription/MovieDescription';
import './Title.css';

const Title = () => {
  const [title, setTitle] = useState<IMovieDetails>();
  const { id } = useParams<string>();
  const movieService = new MovieService();
  useEffect(() => {
    // setTitle(JSON.parse(JSON.stringify(TitleJ)));
    movieService
      .getTilteInfo(id as string)
      .then((data: IMovieDetails) => setTitle(data));
  }, [id]);

  return (
    <div className="container">
      <TitleTop
        titleName={title?.title as string}
        year={title?.year as number}
        contentRating={title?.contentRating as string}
        runtimeStr={title?.runtimeStr as string}
        imDbRating={title?.imDbRating as number}
        imDbRatingVotes={title?.imDbRatingVotes as number}
      />
      <TitleMedia
        image={title?.image as string}
        titleName={title?.title as string}
        trailerLinkEmbed={title?.trailer.linkEmbed as string}
      />
      <MovieDescription
        genreList={title?.genreList as KeyValuePair[]}
        plot={title?.plot as string}
        directors={title?.directors as string}
        writers={title?.writers as string}
        actorList={title?.actorList as IActor[]}
        images={title?.images as any}
        budget={title?.boxOffice.budget as string}
        companies={title?.companies as string}
      />
    </div>
  );
};

export default Title;
