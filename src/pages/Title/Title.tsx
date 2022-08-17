import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { MovieService } from '../../services/MovieService';
import { IMovieDetails } from '../../Types/Movie.type';
import TitleJ from '../../shabolda.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleTop from './TitleTop/TitleTop';
import TitleMedia from './TitleMedia/TitleMedia';
import MovieDescription from './MovieDescription/MovieDescription';
import './Title.css';

const Title = () => {
  const [title, setTitle] = useState<IMovieDetails>({
    trailer: {},
    boxOffice: {},
    images: {
      items: [{}],
    },
  } as IMovieDetails);
  const { id } = useParams<string>();
  const movieService = new MovieService();
  useEffect(() => {
    movieService
      .getTilteInfo(id as string)
      .then((data: IMovieDetails) => setTitle(data));
  }, [id]);
  return title.title === null ? (
    <div className="container">
      <p className="error-message">
        Information about this movie doesnt exist.
      </p>
    </div>
  ) : (
    <div className="container">
      <TitleTop
        titleName={title?.title}
        year={title?.year}
        contentRating={title?.contentRating}
        runtimeStr={title?.runtimeStr}
        imDbRating={title?.imDbRating}
        imDbRatingVotes={title?.imDbRatingVotes}
      />
      <TitleMedia
        image={title?.image}
        titleName={title?.title}
        trailerLinkEmbed={title?.trailer?.linkEmbed}
      />
      <MovieDescription
        genreList={title?.genreList}
        plot={title?.plot}
        directors={title?.directors}
        writers={title?.writers}
        actorList={title?.actorList}
        images={title?.images}
        budget={title?.boxOffice?.budget}
        companies={title?.companies}
      />
    </div>
  );
};

export default Title;
