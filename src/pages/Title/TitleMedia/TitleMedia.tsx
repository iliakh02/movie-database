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
          src={props.image
            ?.split('.')
            .splice(0, 3)
            .concat('_V1_UX300_CR0,4_AL_.jpg')
            .join('.')}
          alt={props.titleName}
          className="movie-main-image"
          loading="lazy"
        />
        <iframe
          className="frame-trailer"
          src={`${props?.trailerLinkEmbed}?autoplay=false`}
          allowFullScreen
          frameBorder="0"
          scrolling="0"
        ></iframe>
      </div>
    </div>
  );
};

export default TitleMedia;
