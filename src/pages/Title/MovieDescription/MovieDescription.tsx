import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './MovieDescription.css';
import { KeyValuePair, IActor } from '../../../Types/Movie.type';

type MovieDescriptionProps = {
  genreList: KeyValuePair[];
  plot: string;
  directors: string;
  writers: string;
  actorList: IActor[];
  images: any;
  budget: string;
  companies: string;
};

const MovieDescription = (props: MovieDescriptionProps) => {
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
    <div className="wrapper">
      <div className="movie-description">
        <div className="genres">
          {props.genreList?.map((genre) => (
            <Link to={`/genres/${genre.key}`}>{genre.value}</Link>
          ))}
        </div>
        <hr className="divider" />
        <p className="plot">{props.plot}</p>
        <hr className="divider" />
        <p className="directors">
          <b>Directors:</b> {props.directors}
        </p>
        <hr className="divider" />
        <p className="writers">
          <b>Writers:</b> {props.writers}
        </p>
        <hr className="divider" />

        <div className="movie-actors-container">
          <p>
            <b>Actors:</b>
          </p>
          <Slider {...actorSliderSettings}>
            {props.actorList?.map((actor: IActor) => (
              <div className="actor" key={actor.id}>
                <img
                  src={actor?.image
                    .split('.')
                    .splice(0, 3)
                    .concat('_V1_UX100_CR0,4,100,100_AL_.jpg')
                    .join('.')}
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
            {props.images?.items?.map((photo: any) => (
              <div className="photo">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="movie-photo"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
        <p className="budget">
          <b>Budget:</b> {props.budget}
        </p>
        <hr className="divider" />
        <p className="companies">
          <b>Companies:</b> {props.companies}
        </p>
      </div>
    </div>
  );
};

export default MovieDescription;
