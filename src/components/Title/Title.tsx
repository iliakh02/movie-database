import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { MovieService } from '../../services/MovieService';
import { IActor, IMovieDetails } from '../../Types/Movie.type';
import './Title.css';
import TitleJ from '../../shabolda.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Title = () => {
  const [title, setTitle] = useState<IMovieDetails>();
  const { id } = useParams<string>();
  const movieService = new MovieService();
  useEffect(() => {
    setTitle(JSON.parse(JSON.stringify(TitleJ)));
    // movieService
    //   .getTilteInfo(id as string)
    //   .then((data: IMovieDetails) => setTitle(data));
  }, [id]);

  const actorSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    draggable: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const photosSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    adaptiveHeight: true,
  };
  return (
    <div className="container">
      <div className="title-top">
        <div className="wrapper">
          <div className="movie-main-info-container">
            <h1 className="title">{title?.title}</h1>
            <ul className="movie-main-info">
              <li className="year">{title?.year}</li>
              <li>{title?.contentRating}</li>
              <li>{title?.runtimeStr}</li>
            </ul>
          </div>
          <div className="imdb-rating">
            <p className="imdb-rating-title">IMDB RATING</p>
            <div className="imdb-rating-container">
              <FontAwesomeIcon icon={faStar} color="gold" />
              <div className="imdb-rating-block">
                <p className="imdb-rating-value">
                  <b className="imdb-rating-number">{title?.imDbRating}</b>/10
                </p>
                <p className="imdb-rating-votes">{title?.imDbRatingVotes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="movie-media">
          <img src={title?.image} alt={title?.title} className="movie-image" />
          <iframe
            className="frame-trailer"
            src={`${title?.trailer.linkEmbed}?autoplay=false`}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            scrolling="0"
          ></iframe>
        </div>
      </div>
      <div className="wrapper">
        <div className="movie-description">
          <div className="genres">
            {title?.genreList.map((genre) => (
              <Link to={`/genres/${genre.key}`}>{genre.value}</Link>
            ))}
          </div>
          <hr className="divider" />
          <p className="plot">{title?.plot}</p>
          <hr className="divider" />
          <p className="directors">
            <b>Directors:</b> {title?.directors}
          </p>
          <hr className="divider" />
          <p className="writers">
            <b>Writers:</b> {title?.writers}
          </p>
          <hr className="divider" />

          <div className="movie-actors-container">
            <p>
              <b>Actors:</b>
            </p>
            <Slider {...actorSliderSettings}>
              {title?.actorList.map((actor: IActor) => (
                <div className="actor" key={actor.id}>
                  <img
                    src={actor.image}
                    alt={actor.name}
                    className="actor-image"
                  />
                  <h5 className="actor-name">{actor.name}</h5>
                  <p className="actor-role">{actor.asCharacter}</p>
                </div>
              ))}
            </Slider>
          </div>
          <hr className="divider" />
          <div className="movie-photos-container">
            <p>
              <b>Photos:</b>
            </p>
            <Slider {...photosSliderSettings}>
              {title?.images.items.map((photo) => (
                <div className="photo">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="movie-photo"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <p className="budget">
            <b>Budget:</b> {title?.boxOffice.budget}
          </p>
          <hr className="divider" />
          <p className="companies">
            <b>Companies:</b> {title?.companies}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
