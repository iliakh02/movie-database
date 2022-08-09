import React from 'react';
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
          frameBorder="0"
          scrolling="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TitleMedia;
