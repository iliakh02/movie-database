import React from 'react';
import { IMovieDetails } from '../../Types/Movie.type';
import './TitleMedia.css';

type TitleMediaProps = {
  image: string;
  titleName: string;
  trailerLinkEmbed: string;
};

const TitleMedia = (props: TitleMediaProps) => {
  return (
    <div className="wrapper">
      <div className="movie-media">
        <img
          src={props.image}
          alt={props.titleName}
          className="movie-main-image"
        />
        <iframe
          className="frame-trailer"
          src={`${props.trailerLinkEmbed}?autoplay=false`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          scrolling="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TitleMedia;
